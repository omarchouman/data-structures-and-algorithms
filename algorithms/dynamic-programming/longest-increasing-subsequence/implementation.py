import bisect

def lis_dp(arr):
    """O(n²) DP — returns length and the actual subsequence."""
    if not arr:
        return 0, []
    n = len(arr)
    dp = [1] * n
    parent = [-1] * n

    for i in range(1, n):
        for j in range(i):
            if arr[j] < arr[i] and dp[j] + 1 > dp[i]:
                dp[i] = dp[j] + 1
                parent[i] = j

    # Reconstruct
    end = dp.index(max(dp))
    seq = []
    while end != -1:
        seq.append(arr[end])
        end = parent[end]
    return max(dp), seq[::-1]


def lis_fast(arr):
    """O(n log n) patience sorting — returns length only."""
    tails = []
    for x in arr:
        pos = bisect.bisect_left(tails, x)
        if pos == len(tails):
            tails.append(x)
        else:
            tails[pos] = x
    return len(tails)


if __name__ == "__main__":
    data = [10, 9, 2, 5, 3, 7, 101, 18]
    length, seq = lis_dp(data)
    print("LIS length (DP):", length)      # 4
    print("LIS sequence:", seq)             # [2, 3, 7, 101]
    print("LIS length (fast):", lis_fast(data))  # 4
