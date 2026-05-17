def selection_sort(arr):
    a = arr[:]
    n = len(a)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if a[j] < a[min_idx]:
                min_idx = j
        a[i], a[min_idx] = a[min_idx], a[i]
    return a


if __name__ == "__main__":
    data = [64, 25, 12, 22, 11]
    print("Before:", data)
    print("After: ", selection_sort(data))  # [11, 12, 22, 25, 64]
