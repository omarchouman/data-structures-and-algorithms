def insertion_sort(arr):
    a = arr[:]
    for i in range(1, len(a)):
        key = a[i]
        j = i - 1
        while j >= 0 and a[j] > key:
            a[j + 1] = a[j]
            j -= 1
        a[j + 1] = key
    return a


if __name__ == "__main__":
    data = [12, 11, 13, 5, 6]
    print("Before:", data)
    print("After: ", insertion_sort(data))  # [5, 6, 11, 12, 13]
