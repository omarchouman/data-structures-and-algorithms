INF = float("inf")

def floyd_warshall(n, edges):
    """
    n: number of vertices (0-indexed)
    edges: list of (u, v, weight)
    Returns dist matrix and negative cycle flag
    """
    dist = [[INF] * n for _ in range(n)]
    for i in range(n):
        dist[i][i] = 0
    for u, v, w in edges:
        dist[u][v] = w

    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]

    has_neg_cycle = any(dist[i][i] < 0 for i in range(n))
    return dist, has_neg_cycle


def print_matrix(dist, labels):
    header = "     " + "  ".join(f"{l:>4}" for l in labels)
    print(header)
    for i, row in enumerate(dist):
        vals = "  ".join("  INF" if v == INF else f"{v:>4}" for v in row)
        print(f"  {labels[i]}  {vals}")


if __name__ == "__main__":
    # 4 nodes: 0=A, 1=B, 2=C, 3=D
    edges = [
        (0, 1, 3), (0, 3, 7),
        (1, 0, 8), (1, 2, 2),
        (2, 0, 5), (2, 3, 1),
        (3, 0, 2),
    ]
    dist, neg = floyd_warshall(4, edges)
    print_matrix(dist, ["A", "B", "C", "D"])
    print("Negative cycle:", neg)
