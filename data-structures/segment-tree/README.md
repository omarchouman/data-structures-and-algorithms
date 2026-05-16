# Segment Tree

A segment tree is a binary tree built over an array that allows efficient **range queries** (sum, min, max over a subarray) and **point updates** in O(log n) each.

## How It Works

- Build a complete binary tree where each leaf holds one array element
- Each internal node holds the aggregate (e.g. sum) of its subtree's range
- Store the tree in an array of size 4n — node at index `i` has children at `2i` and `2i+1`

**Query** `[l, r]` — recurse, combining only segments that overlap the query range  
**Update** index `i` — update the leaf and propagate changes back up to the root

## Time Complexity

| Operation | Complexity |
|---|---|
| Build | O(n) |
| Range Query | O(log n) |
| Point Update | O(log n) |

**Space:** O(n)

## Use Cases

| Use Case | Description |
|---|---|
| Range Sum / Min / Max | Answer repeated range aggregate queries efficiently |
| Interval Problems | Find all intervals overlapping a point |
| Competitive Programming | Backbone of many range-query problems |
| Database Query Engines | Aggregate functions over column ranges |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
