class MinHeap:
    def __init__(self):
        self._data = []

    def push(self, value):
        self._data.append(value)
        self._bubble_up(len(self._data) - 1)

    def pop(self):
        if not self._data:
            raise IndexError("Pop from empty heap")
        self._data[0], self._data[-1] = self._data[-1], self._data[0]
        val = self._data.pop()
        self._bubble_down(0)
        return val

    def peek(self):
        if not self._data:
            raise IndexError("Peek at empty heap")
        return self._data[0]

    def _bubble_up(self, i):
        while i > 0:
            parent = (i - 1) // 2
            if self._data[i] < self._data[parent]:
                self._data[i], self._data[parent] = self._data[parent], self._data[i]
                i = parent
            else:
                break

    def _bubble_down(self, i):
        n = len(self._data)
        while True:
            smallest = i
            left, right = 2 * i + 1, 2 * i + 2
            if left < n and self._data[left] < self._data[smallest]:
                smallest = left
            if right < n and self._data[right] < self._data[smallest]:
                smallest = right
            if smallest == i:
                break
            self._data[i], self._data[smallest] = self._data[smallest], self._data[i]
            i = smallest

    def __len__(self):
        return len(self._data)

    def __repr__(self):
        return str(self._data)


def main():
    heap = MinHeap()
    for val in [40, 10, 30, 20, 50]:
        heap.push(val)

    print("Heap array:", heap)          # internal array
    print("Peek (min):", heap.peek())   # 10
    print("Pop:", heap.pop())           # 10
    print("Pop:", heap.pop())           # 20
    print("Heap after pops:", heap)
    print("Size:", len(heap))

if __name__ == "__main__":
    main()
