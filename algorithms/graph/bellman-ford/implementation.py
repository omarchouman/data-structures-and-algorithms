def bellman_ford(vertices, edges, source):
    """
    vertices: list of node names
    edges: list of (u, v, weight) tuples
    Returns (dist, has_negative_cycle)
    """
    dist = {v: float("inf") for v in vertices}
    dist[source] = 0

    for _ in range(len(vertices) - 1):
        for u, v, w in edges:
            if dist[u] != float("inf") and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w

    # Detect negative cycle
    for u, v, w in edges:
        if dist[u] != float("inf") and dist[u] + w < dist[v]:
            return dist, True

    return dist, False


if __name__ == "__main__":
    vertices = ["A", "B", "C", "D", "E"]
    edges = [
        ("A", "B", -1),
        ("A", "C",  4),
        ("B", "C",  3),
        ("B", "D",  2),
        ("B", "E",  2),
        ("D", "B",  1),
        ("D", "C",  5),
        ("E", "D", -3),
    ]

    dist, has_neg_cycle = bellman_ford(vertices, edges, "A")
    print("Distances from A:", dist)
    # {'A': 0, 'B': -1, 'C': 2, 'D': -2, 'E': 1}
    print("Negative cycle:", has_neg_cycle)  # False
