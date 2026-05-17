# Bellman-Ford

Bellman-Ford finds the shortest path from a source to all nodes in a weighted graph, including graphs with **negative edge weights**. It also detects negative-weight cycles.

## How It Works

1. Set `dist[source] = 0`, all others = ∞
2. Relax **all** edges V−1 times:
   - For each edge (u, v, w): if `dist[u] + w < dist[v]`, update `dist[v]`
3. Run one more pass — if any distance still decreases, a **negative cycle** exists

**Why V−1 relaxations?** The shortest path between any two nodes visits at most V−1 edges (no cycles in a simple path).

## Time Complexity

| Complexity | Value |
|---|---|
| Time | O(V × E) |
| Space | O(V) |

Slower than Dijkstra but handles negative weights and detects negative cycles.

## Use Cases

| Use Case | Description |
|---|---|
| Negative Edge Weights | Currency arbitrage, routing with credits/costs |
| Negative Cycle Detection | Detect arbitrage opportunities in exchange rate graphs |
| Distributed Routing | RIP (Routing Information Protocol) uses Bellman-Ford |
| General Shortest Path | Works on any weighted directed graph without negative cycles |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
