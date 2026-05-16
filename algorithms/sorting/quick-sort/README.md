# Quick Sort

Quick sort is a divide-and-conquer algorithm that selects a **pivot** element, partitions the array so that all elements less than the pivot are on the left and all greater are on the right, then recursively sorts both sides.

## How It Works

1. Choose a pivot (commonly the middle element to avoid worst-case on sorted input)
2. **Partition** — rearrange elements: `[< pivot] [pivot] [> pivot]`
3. Recursively apply to the left and right partitions
4. Base case: partitions of size 0 or 1 are already sorted

## Time Complexity

| Case | Complexity |
|---|---|
| Best | O(n log n) |
| Average | O(n log n) |
| Worst (sorted input, bad pivot) | O(n²) |

**Space:** O(log n) average — recursion stack

## Use Cases

| Use Case | Description |
|---|---|
| General-Purpose Sorting | Fastest in practice for most real-world data due to cache efficiency |
| In-Place Sorting | Sorts without auxiliary arrays, minimal memory footprint |
| Systems Sort | Used internally by many standard library `sort()` implementations |

![Quick Sort](../../../images/students-in-line.jpg)

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
