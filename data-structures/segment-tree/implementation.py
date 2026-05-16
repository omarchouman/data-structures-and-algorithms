class SegmentTree:
    def __init__(self, data):
        self.n = len(data)
        self.tree = [0] * (4 * self.n)
        if self.n:
            self._build(data, 0, 0, self.n - 1)

    def _build(self, data, node, start, end):
        if start == end:
            self.tree[node] = data[start]
        else:
            mid = (start + end) // 2
            self._build(data, 2 * node + 1, start, mid)
            self._build(data, 2 * node + 2, mid + 1, end)
            self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]

    def query(self, l, r):
        return self._query(0, 0, self.n - 1, l, r)

    def _query(self, node, start, end, l, r):
        if r < start or end < l:
            return 0  # out of range
        if l <= start and end <= r:
            return self.tree[node]  # fully within range
        mid = (start + end) // 2
        return (self._query(2 * node + 1, start, mid, l, r) +
                self._query(2 * node + 2, mid + 1, end, l, r))

    def update(self, index, value):
        self._update(0, 0, self.n - 1, index, value)

    def _update(self, node, start, end, index, value):
        if start == end:
            self.tree[node] = value
        else:
            mid = (start + end) // 2
            if index <= mid:
                self._update(2 * node + 1, start, mid, index, value)
            else:
                self._update(2 * node + 2, mid + 1, end, index, value)
            self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]


def main():
    data = [1, 3, 5, 7, 9, 11]
    st = SegmentTree(data)

    print("Sum [1, 3]:", st.query(1, 3))   # 3+5+7 = 15
    print("Sum [0, 5]:", st.query(0, 5))   # 36
    st.update(1, 10)                        # data[1] = 10
    print("After update(1, 10):")
    print("Sum [1, 3]:", st.query(1, 3))   # 10+5+7 = 22


if __name__ == "__main__":
    main()
