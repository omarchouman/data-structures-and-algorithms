# Floyd-Warshall

Floyd-Warshall computes the shortest path between **every pair** of nodes in a weighted graph. It works with negative edges and detects negative cycles.

## How It Works

Uses dynamic programming with a V×V distance matrix.

For each intermediate node `k`, for every pair `(i, j)`:
```
dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
```

After considering all intermediate nodes, `dist[i][j]` holds the shortest path from `i` to `j`.

**Initialisation:**
- `dist[i][i] = 0`
- `dist[i][j] = weight(i,j)` if edge exists
- `dist[i][j] = ∞` otherwise

**Negative cycle detection:** if `dist[i][i] < 0` for any `i` after the algorithm, a negative cycle exists.

## Time Complexity

| Complexity | Value |
|---|---|
| Time | O(V³) |
| Space | O(V²) |

## Use Cases

| Use Case | Description |
|---|---|
| All-Pairs Shortest Path | Find shortest distance between every pair of cities |
| Transitive Closure | Determine reachability between all node pairs |
| Network Analysis | Detect negative cycles in arbitrage or routing scenarios |
| Small Dense Graphs | Efficient when V is small but E is large (complete graphs) |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
