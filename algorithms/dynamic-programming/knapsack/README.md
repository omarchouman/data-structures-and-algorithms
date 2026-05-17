# 0/1 Knapsack

Given a set of items each with a **weight** and a **value**, and a knapsack with a maximum weight capacity, find the maximum total value you can carry. Each item can be taken **at most once** (hence 0/1).

## How It Works

Define `dp[i][w]` = maximum value using the first `i` items with weight capacity `w`.

**Recurrence:**
```
dp[i][w] = dp[i-1][w]                              if weight[i] > w  (can't take item i)
dp[i][w] = max(dp[i-1][w], value[i] + dp[i-1][w - weight[i]])   otherwise
```

**Base case:** `dp[0][w] = 0` for all `w` (no items → no value)

Build the table bottom-up. The answer is `dp[n][capacity]`.

## Time Complexity

| Complexity | Value |
|---|---|
| Time | O(n × W) — n items, W capacity |
| Space | O(n × W), reducible to O(W) with a 1D array |

## Use Cases

| Use Case | Description |
|---|---|
| Resource Allocation | Maximise output given limited CPU/memory/budget |
| Portfolio Optimisation | Select investments within a risk budget |
| Cargo Loading | Maximise value of goods loaded onto a vessel |
| Feature Selection | Choose the best features within a computation budget |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
