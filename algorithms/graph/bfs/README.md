# Breadth-First Search (BFS)

BFS explores a graph level by level, visiting all neighbours of a node before moving to the next depth. It uses a **queue** to track which node to visit next.

## How It Works

1. Enqueue the start node and mark it visited
2. Dequeue the front node, process it
3. Enqueue all its unvisited neighbours and mark them visited
4. Repeat until the queue is empty

## Time Complexity

| Complexity | Value |
|---|---|
| Time | O(V + E) — V vertices, E edges |
| Space | O(V) — queue + visited set |

## Use Cases

| Use Case | Description |
|---|---|
| Shortest Path (unweighted) | BFS guarantees the shortest path in an unweighted graph |
| Level-Order Tree Traversal | Visit nodes layer by layer |
| Connected Components | Find all nodes reachable from a source |
| Web Crawlers | Explore links breadth-first from a seed URL |

![BFS](../../../images/BFSAlgo.gif)

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
