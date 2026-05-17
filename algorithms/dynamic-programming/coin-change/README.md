# Coin Change

Given an array of coin denominations and a target amount, find the **minimum number of coins** needed to make up that amount. If it is not possible, return `-1`.

**Example:** coins = `[1, 5, 10, 25]`, amount = `36` → answer = **3** (`25 + 10 + 1`).

## Approach — Bottom-Up DP

Build a table `dp` where `dp[i]` = minimum coins needed to make amount `i`.

```
dp[0] = 0
dp[i] = min(dp[i - coin] + 1) for each coin ≤ i
```

Initialise all entries to `amount + 1` (sentinel for "impossible"). After filling the table, `dp[amount]` holds the answer (or `-1` if still a sentinel).

### Reconstruction

Track a `last` array: `last[i]` = the coin used to reach amount `i`. Backtrack from `amount` to `0` to list the coins chosen.

## Time Complexity

| | Time | Space |
|---|---|---|
| Bottom-up DP | O(amount × n) | O(amount) |

where `n` = number of coin denominations.

## Use Cases

| Use Case | Description |
|---|---|
| Currency / Cash registers | Minimise the number of bills/coins given as change |
| Vending machines | Determine if an exact amount is achievable |
| Network packet fragmentation | Partition data into minimum number of fixed-size chunks |
| Resource allocation | Cover a target cost with fewest discrete units |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
