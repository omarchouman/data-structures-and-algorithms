class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.components = n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # path compression
        return self.parent[x]

    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry:
            return False  # already in the same set
        # union by rank
        if self.rank[rx] < self.rank[ry]:
            rx, ry = ry, rx
        self.parent[ry] = rx
        if self.rank[rx] == self.rank[ry]:
            self.rank[rx] += 1
        self.components -= 1
        return True

    def connected(self, x, y):
        return self.find(x) == self.find(y)


def main():
    uf = UnionFind(6)  # nodes 0..5

    uf.union(0, 1)
    uf.union(1, 2)
    uf.union(3, 4)

    print("0 and 2 connected:", uf.connected(0, 2))  # True
    print("0 and 3 connected:", uf.connected(0, 3))  # False
    print("Components:", uf.components)               # 3

    uf.union(2, 3)
    print("After union(2,3):")
    print("0 and 4 connected:", uf.connected(0, 4))  # True
    print("Components:", uf.components)               # 2


if __name__ == "__main__":
    main()
