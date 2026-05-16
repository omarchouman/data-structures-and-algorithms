def linear_search(arr, target):
    for i, val in enumerate(arr):
        if val == target:
            return i
    return -1


if __name__ == "__main__":
    data = [4, 2, 7, 1, 9, 3]
    print("Search 7:", linear_search(data, 7))   # 2
    print("Search 5:", linear_search(data, 5))   # -1
