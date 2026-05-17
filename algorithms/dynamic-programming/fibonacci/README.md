# Fibonacci (Dynamic Programming)

The Fibonacci sequence is the classic introduction to dynamic programming. The naive recursive solution recomputes the same subproblems exponentially — DP eliminates that by storing results.

## Approaches

### 1. Naive Recursion
```
fib(n) = fib(n-1) + fib(n-2)
```
Time: **O(2ⁿ)** — each call branches into two, creating an exponential tree of duplicate work.

### 2. Memoisation (Top-Down DP)
Cache each `fib(n)` result the first time it is computed. On subsequent calls return the cached value.
Time: **O(n)** | Space: **O(n)**

### 3. Tabulation (Bottom-Up DP)
Build the solution iteratively from `fib(0)` up to `fib(n)`, storing results in a table.
Time: **O(n)** | Space: **O(n)**

### 4. Space-Optimised
Only keep the last two values — no table needed.
Time: **O(n)** | Space: **O(1)**

## Time Complexity Summary

| Approach | Time | Space |
|---|---|---|
| Naive recursion | O(2ⁿ) | O(n) stack |
| Memoisation | O(n) | O(n) |
| Tabulation | O(n) | O(n) |
| Space-optimised | O(n) | O(1) |

## Use Cases

| Use Case | Description |
|---|---|
| DP Introduction | Demonstrates memoisation and tabulation patterns used across all DP problems |
| Mathematical Sequences | Population growth, financial modelling, spiral geometry |
| Algorithm Analysis | Benchmark for recursion vs DP performance |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
