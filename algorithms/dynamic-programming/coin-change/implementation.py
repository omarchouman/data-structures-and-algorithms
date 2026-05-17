def coin_change(coins, amount):
    """Returns minimum coins needed, or -1 if impossible."""
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0
    last = [-1] * (amount + 1)

    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i and dp[i - coin] + 1 < dp[i]:
                dp[i] = dp[i - coin] + 1
                last[i] = coin

    if dp[amount] > amount:
        return -1, []

    # Reconstruct which coins were used
    chosen = []
    rem = amount
    while rem > 0:
        chosen.append(last[rem])
        rem -= last[rem]
    return dp[amount], chosen


if __name__ == "__main__":
    coins = [1, 5, 10, 25]
    amount = 36
    count, used = coin_change(coins, amount)
    print("Min coins:", count)   # 3
    print("Coins used:", used)   # [25, 10, 1]

    print(coin_change([2], 3))   # (-1, [])
