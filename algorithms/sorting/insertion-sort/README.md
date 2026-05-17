# Insertion Sort

Insertion sort builds the sorted array one element at a time. It picks each element and inserts it into its correct position among the already-sorted elements to its left — like sorting a hand of playing cards.

## How It Works

1. Start with index 1 (the first element is trivially sorted)
2. Pick `arr[i]` as the key
3. Shift all sorted elements greater than the key one position to the right
4. Insert the key into the gap
5. Repeat for every element

## Time Complexity

| Case | Complexity |
|---|---|
| Best (already sorted) | O(n) |
| Average | O(n²) |
| Worst (reverse sorted) | O(n²) |

**Space:** O(1) — in-place

## Use Cases

| Use Case | Description |
|---|---|
| Nearly Sorted Data | Best-case O(n) makes it faster than merge/quick sort on almost-sorted input |
| Small Arrays | Low constant overhead — often used as the base case in hybrid sorts (e.g. Timsort) |
| Online Sorting | Can sort a stream of elements as they arrive, one at a time |
| Stable Sort | Preserves relative order of equal elements |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
