# Selection Sort

Selection sort divides the array into a sorted region (left) and an unsorted region (right). On each pass it finds the minimum element in the unsorted region and swaps it to the front of that region, growing the sorted portion by one.

## How It Works

1. Find the minimum element in `arr[i..n-1]`
2. Swap it with `arr[i]`
3. Advance `i` by one
4. Repeat until the entire array is sorted

## Time Complexity

| Case | Complexity |
|---|---|
| Best | O(n²) |
| Average | O(n²) |
| Worst | O(n²) |

Selection sort always makes exactly **n−1 swaps** regardless of input order — useful when writes are expensive.

**Space:** O(1) — in-place

## Use Cases

| Use Case | Description |
|---|---|
| Minimising Writes | Only n−1 swaps — good when memory write cost is high (e.g. flash storage) |
| Small Arrays | Simple and predictable, low overhead for tiny datasets |
| Teaching | Clear visualisation of the "find min and place" pattern |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
