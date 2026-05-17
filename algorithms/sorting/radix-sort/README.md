# Radix Sort

Radix sort is a non-comparison-based sorting algorithm. It sorts integers digit by digit, from the least significant digit (LSD) to the most significant digit (MSD), using a stable sub-sort (typically counting sort) at each digit position.

## How It Works

1. Find the maximum value to know how many digit positions to process
2. For each digit position (units, tens, hundreds, …):
   - Group elements into 10 buckets (digits 0–9) based on the current digit
   - Collect buckets back into the array in order
3. After processing all digit positions the array is fully sorted

## Time Complexity

| Case | Complexity |
|---|---|
| Best | O(n × k) |
| Average | O(n × k) |
| Worst | O(n × k) |

Where **k** = number of digits in the maximum value. For fixed-width integers k is constant → effectively **O(n)**.

**Space:** O(n + b) — b = base (10 for decimal)

## Use Cases

| Use Case | Description |
|---|---|
| Large Integer Datasets | Beats comparison sorts when k is small relative to log n |
| Fixed-Width Keys | Sorting strings of equal length, IP addresses, phone numbers |
| Stable Sort Requirement | Naturally stable at each digit pass |
| Counting / Distribution | Basis for distribution-based sorts in databases |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
