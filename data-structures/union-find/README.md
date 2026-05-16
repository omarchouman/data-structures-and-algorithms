# Union-Find (Disjoint Set Union)

Union-Find tracks a collection of elements partitioned into disjoint sets. It supports two operations efficiently: merging two sets and querying whether two elements belong to the same set.

## How It Works

Each element points to a **parent**. The root of the tree (where `parent[i] == i`) is the **representative** of the set.

Two optimisations make both operations nearly O(1):

- **Path Compression** — during `find`, point every node on the path directly to the root, flattening future lookups
- **Union by Rank** — always attach the smaller tree under the larger one, keeping trees shallow

## Time Complexity

| Operation | Complexity |
|---|---|
| Find | O(α(n)) ≈ O(1) amortized |
| Union | O(α(n)) ≈ O(1) amortized |

α is the inverse Ackermann function — effectively constant for any realistic input size.

**Space:** O(n)

## Use Cases

| Use Case | Description |
|---|---|
| Kruskal's MST | Detect cycles when adding edges to a spanning tree |
| Connected Components | Determine if two nodes are in the same component |
| Percolation | Model fluid flow through a grid |
| Dynamic Connectivity | Answer online queries about whether nodes are connected |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
