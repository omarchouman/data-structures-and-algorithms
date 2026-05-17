# Longest Common Subsequence (LCS)

Given two strings, find the length of the longest subsequence present in both. A subsequence maintains relative order but does not need to be contiguous.

**Example:** LCS of `"ABCBDAB"` and `"BDCAB"` is `"BCAB"` (length 4).

## How It Works

Define `dp[i][j]` = length of LCS of `s1[0..i-1]` and `s2[0..j-1]`.

**Recurrence:**
```
if s1[i-1] == s2[j-1]:
    dp[i][j] = dp[i-1][j-1] + 1
else:
    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
```

**Base case:** `dp[i][0] = dp[0][j] = 0`

Backtrack through the table to reconstruct the actual subsequence.

## Time Complexity

| Complexity | Value |
|---|---|
| Time | O(m × n) — m, n = string lengths |
| Space | O(m × n), reducible to O(min(m,n)) |

## Use Cases

| Use Case | Description |
|---|---|
| Diff Tools | `git diff` finds the LCS to highlight changes between files |
| DNA Sequence Alignment | Measure similarity between genetic sequences |
| Spell Checking | Compute edit distance as a variant of LCS |
| Version Control | Merge algorithms use LCS to reconcile diverged histories |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
