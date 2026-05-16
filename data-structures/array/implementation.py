def main():
    # Fixed-size array simulation using a Python list with a capacity constraint
    capacity = 5
    arr = [None] * capacity
    size = 0

    # Insert elements
    def insert(value):
        nonlocal size
        if size >= capacity:
            raise OverflowError("Array is full")
        arr[size] = value
        size += 1

    # Access element by index
    def access(index):
        if index < 0 or index >= size:
            raise IndexError("Index out of bounds")
        return arr[index]

    # Search for a value, returns index or -1
    def search(value):
        for i in range(size):
            if arr[i] == value:
                return i
        return -1

    # Delete element at index, shift remaining elements left
    def delete(index):
        nonlocal size
        if index < 0 or index >= size:
            raise IndexError("Index out of bounds")
        for i in range(index, size - 1):
            arr[i] = arr[i + 1]
        arr[size - 1] = None
        size -= 1

    insert(10)
    insert(20)
    insert(30)
    insert(40)
    insert(50)

    print("Array:", arr[:size])          # [10, 20, 30, 40, 50]
    print("Access index 2:", access(2))  # 30
    print("Search 40:", search(40))      # 3
    delete(1)
    print("After deleting index 1:", arr[:size])  # [10, 30, 40, 50]

if __name__ == "__main__":
    main()
