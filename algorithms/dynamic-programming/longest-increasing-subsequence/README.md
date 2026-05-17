# Longest Increasing Subsequence (LIS)

Given an array of integers, find the length of the longest strictly increasing subsequence. Elements do not need to be contiguous.

**Example:** `[10, 9, 2, 5, 3, 7, 101, 18]` → LIS = `[2, 3, 7, 101]`, length **4**.

## Approaches

### 1. DP — O(n²)
`dp[i]` = length of LIS ending at index `i`.

```
dp[i] = max(dp[j] + 1) for all j < i where arr[j] < arr[i]
```

### 2. Patience Sorting — O(n log n)
Maintain a list of the smallest tail elements of increasing subsequences of each length. Use binary search to find where the current element fits.

## Time Complexity

| Approach | Time | Space |
|---|---|---|
| DP | O(n²) | O(n) |
| Patience sorting (binary search) | O(n log n) | O(n) |

## Use Cases

| Use Case | Description |
|---|---|
| Stock Trading | Find the longest run of increasing prices |
| Activity Scheduling | Select the maximum non-overlapping intervals |
| Chain Problems | Box stacking, Russian doll envelopes |
| Sequence Analysis | Detect monotone trends in time-series data |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
