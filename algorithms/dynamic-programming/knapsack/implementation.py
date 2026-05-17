def knapsack(weights, values, capacity):
    n = len(weights)
    # Space-optimised 1D DP — iterate capacity in reverse to avoid using an item twice
    dp = [0] * (capacity + 1)

    for i in range(n):
        for w in range(capacity, weights[i] - 1, -1):
            dp[w] = max(dp[w], values[i] + dp[w - weights[i]])

    return dp[capacity]


def knapsack_with_items(weights, values, capacity):
    """Returns (max_value, list of chosen item indices)."""
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(capacity + 1):
            dp[i][w] = dp[i - 1][w]
            if weights[i - 1] <= w:
                dp[i][w] = max(dp[i][w], values[i - 1] + dp[i - 1][w - weights[i - 1]])

    # Backtrack to find chosen items
    chosen = []
    w = capacity
    for i in range(n, 0, -1):
        if dp[i][w] != dp[i - 1][w]:
            chosen.append(i - 1)
            w -= weights[i - 1]

    return dp[n][capacity], chosen[::-1]


if __name__ == "__main__":
    weights  = [2, 3, 4, 5]
    values   = [3, 4, 5, 6]
    capacity = 8

    print("Max value:", knapsack(weights, values, capacity))  # 10

    max_val, items = knapsack_with_items(weights, values, capacity)
    print("Max value:", max_val)   # 10
    print("Items chosen (indices):", items)  # [1, 3] → weights [3,5], values [4,6]
