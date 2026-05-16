class DynamicArray:
    def __init__(self):
        self._capacity = 2
        self._data = [None] * self._capacity
        self._size = 0

    def append(self, value):
        if self._size == self._capacity:
            self._resize(self._capacity * 2)
        self._data[self._size] = value
        self._size += 1

    def get(self, index):
        if index < 0 or index >= self._size:
            raise IndexError("Index out of bounds")
        return self._data[index]

    def delete(self, index):
        if index < 0 or index >= self._size:
            raise IndexError("Index out of bounds")
        for i in range(index, self._size - 1):
            self._data[i] = self._data[i + 1]
        self._data[self._size - 1] = None
        self._size -= 1
        if self._size > 0 and self._size == self._capacity // 4:
            self._resize(self._capacity // 2)

    def _resize(self, new_capacity):
        new_data = [None] * new_capacity
        for i in range(self._size):
            new_data[i] = self._data[i]
        self._data = new_data
        self._capacity = new_capacity

    def __len__(self):
        return self._size

    def __repr__(self):
        return str(self._data[:self._size])


def main():
    da = DynamicArray()
    for val in [10, 20, 30, 40, 50]:
        da.append(val)

    print("Array:", da)                  # [10, 20, 30, 40, 50]
    print("Element at index 2:", da.get(2))  # 30
    da.delete(1)
    print("After deleting index 1:", da)     # [10, 30, 40, 50]
    print("Length:", len(da))                # 4

if __name__ == "__main__":
    main()
