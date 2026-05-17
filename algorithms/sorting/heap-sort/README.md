# Heap Sort

Heap sort sorts an array in two phases: first it builds a max-heap from the array in-place, then it repeatedly extracts the maximum (the root) and places it at the end, shrinking the heap by one each time.

## How It Works

**Phase 1 — Build Max-Heap**
- Start from the last non-leaf node and heapify downward to the root
- After this pass, `arr[0]` holds the largest element

**Phase 2 — Sort**
1. Swap `arr[0]` (max) with `arr[n-1]`
2. Reduce heap size by 1
3. Heapify down from the root to restore the heap property
4. Repeat until the heap size is 1

## Time Complexity

| Case | Complexity |
|---|---|
| Best | O(n log n) |
| Average | O(n log n) |
| Worst | O(n log n) |

**Space:** O(1) — sorts in-place, unlike merge sort

## Use Cases

| Use Case | Description |
|---|---|
| Guaranteed O(n log n) | No worst-case degradation unlike quick sort |
| In-Place Sorting | No auxiliary array needed |
| Priority Queue Simulation | The build-heap step is also used in `heapq`-style algorithms |
| Partial Sort (Top-K) | Extract only the k largest elements without full sort |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
