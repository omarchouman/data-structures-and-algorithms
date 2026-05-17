def heap_sort(arr):
    a = arr[:]
    n = len(a)

    def heapify(n, i):
        largest = i
        left, right = 2 * i + 1, 2 * i + 2
        if left < n and a[left] > a[largest]:
            largest = left
        if right < n and a[right] > a[largest]:
            largest = right
        if largest != i:
            a[i], a[largest] = a[largest], a[i]
            heapify(n, largest)

    # Build max-heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(n, i)

    # Extract elements from heap one by one
    for i in range(n - 1, 0, -1):
        a[0], a[i] = a[i], a[0]
        heapify(i, 0)

    return a


if __name__ == "__main__":
    data = [12, 11, 13, 5, 6, 7]
    print("Before:", data)
    print("After: ", heap_sort(data))  # [5, 6, 7, 11, 12, 13]
