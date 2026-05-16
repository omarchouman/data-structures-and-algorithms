def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif target < arr[mid]:
            high = mid - 1
        else:
            low = mid + 1
    return -1


if __name__ == "__main__":
    data = [1, 3, 5, 7, 9, 11, 13, 15]
    print("Search 7:", binary_search(data, 7))    # 3
    print("Search 1:", binary_search(data, 1))    # 0
    print("Search 6:", binary_search(data, 6))    # -1
