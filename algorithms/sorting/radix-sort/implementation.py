def radix_sort(arr):
    if not arr:
        return arr

    a = arr[:]
    max_val = max(a)
    exp = 1

    while max_val // exp > 0:
        a = _counting_sort_by_digit(a, exp)
        exp *= 10

    return a


def _counting_sort_by_digit(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    for val in arr:
        count[(val // exp) % 10] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    for i in range(n - 1, -1, -1):
        digit = (arr[i] // exp) % 10
        output[count[digit] - 1] = arr[i]
        count[digit] -= 1

    return output


if __name__ == "__main__":
    data = [170, 45, 75, 90, 802, 24, 2, 66]
    print("Before:", data)
    print("After: ", radix_sort(data))  # [2, 24, 45, 66, 75, 90, 170, 802]
