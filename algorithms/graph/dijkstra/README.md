# Dijkstra's Shortest Path

Dijkstra's algorithm finds the shortest path from a source node to all other nodes in a weighted graph with **non-negative** edge weights. It greedily picks the unvisited node with the smallest known distance at each step.

## How It Works

1. Set `dist[source] = 0`, all others = ∞
2. Push `(0, source)` into a min-heap
3. Pop the node `u` with the smallest distance
4. For each neighbour `v` of `u`: if `dist[u] + weight(u,v) < dist[v]`, update `dist[v]` and push to heap
5. Repeat until the heap is empty

## Time Complexity

| Implementation | Complexity |
|---|---|
| Min-heap + adjacency list | O((V + E) log V) |
| Adjacency matrix (naive) | O(V²) |

**Space:** O(V + E)

## Constraints

- Edge weights must be **non-negative**
- For negative weights use [Bellman-Ford](../bellman-ford/)

## Use Cases

| Use Case | Description |
|---|---|
| GPS Navigation | Shortest driving route between two points |
| Network Routing | OSPF protocol uses Dijkstra to find least-cost paths |
| Game Pathfinding | A* is Dijkstra with a heuristic added |
| Shortest Path in DAGs | Foundation for many graph optimisation problems |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
