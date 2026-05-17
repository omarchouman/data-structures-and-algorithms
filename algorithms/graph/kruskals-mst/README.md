# Kruskal's Minimum Spanning Tree

Kruskal's algorithm builds an MST by sorting all edges by weight and greedily adding the cheapest edge that does **not** create a cycle. It uses [Union-Find](../../../data-structures/union-find/) to detect cycles in near-constant time.

## How It Works

1. Sort all edges by weight ascending
2. Initialise a Union-Find with all vertices
3. For each edge `(u, v, w)` in sorted order:
   - If `find(u) != find(v)` → they are in different components → add edge to MST and `union(u, v)`
   - Otherwise skip (would create a cycle)
4. Stop when MST has V−1 edges

## Time Complexity

| Step | Complexity |
|---|---|
| Sort edges | O(E log E) |
| Union-Find operations | O(E α(V)) ≈ O(E) |
| **Total** | **O(E log E)** |

**Space:** O(V + E)

## Prim's vs Kruskal's

| | Prim's | Kruskal's |
|---|---|---|
| Works on | Connected graphs | Works even with disconnected graphs (finds forest) |
| Best for | Dense graphs | Sparse graphs |
| Data structure | Min-heap | Sorted edges + Union-Find |

## Use Cases

| Use Case | Description |
|---|---|
| Sparse Network Design | Efficient when edges are far fewer than V² |
| Spanning Forest | Handles disconnected graphs naturally |
| Image Processing | Minimum cost segmentation via edge-weighted graphs |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
