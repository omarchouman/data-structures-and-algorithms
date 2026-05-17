# Prim's Minimum Spanning Tree

Prim's algorithm builds a Minimum Spanning Tree (MST) for a weighted undirected graph. An MST connects all vertices with the minimum total edge weight and no cycles.

Prim's grows the MST one vertex at a time — always adding the cheapest edge that connects a new vertex to the existing tree.

## How It Works

1. Start with any vertex; mark it as part of the MST
2. Push all its edges into a min-heap keyed by weight
3. Pop the cheapest edge `(weight, u, v)`; if `v` is already in the MST, skip
4. Add `v` to the MST, record the edge, push `v`'s edges into the heap
5. Repeat until all vertices are in the MST

## Time Complexity

| Implementation | Complexity |
|---|---|
| Min-heap + adjacency list | O(E log V) |
| Adjacency matrix (naive) | O(V²) |

**Space:** O(V + E)

## Use Cases

| Use Case | Description |
|---|---|
| Network Design | Minimum cost to connect all nodes (cable, pipe, road networks) |
| Cluster Analysis | MST-based clustering by removing the heaviest edges |
| Image Segmentation | Pixels as nodes, intensity difference as weights |
| Approximation Algorithms | MST is the backbone of many TSP approximations |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
