class UnionFind:
    def __init__(self, nodes):
        self.parent = {n: n for n in nodes}
        self.rank = {n: 0 for n in nodes}

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry:
            return False
        if self.rank[rx] < self.rank[ry]:
            rx, ry = ry, rx
        self.parent[ry] = rx
        if self.rank[rx] == self.rank[ry]:
            self.rank[rx] += 1
        return True


def kruskals_mst(vertices, edges):
    """
    vertices: list of node names
    edges: list of (u, v, weight)
    Returns (mst_edges, total_weight)
    """
    uf = UnionFind(vertices)
    sorted_edges = sorted(edges, key=lambda e: e[2])
    mst_edges = []
    total_weight = 0

    for u, v, w in sorted_edges:
        if uf.union(u, v):
            mst_edges.append((u, v, w))
            total_weight += w
            if len(mst_edges) == len(vertices) - 1:
                break

    return mst_edges, total_weight


if __name__ == "__main__":
    vertices = ["A", "B", "C", "D"]
    edges = [
        ("A", "B", 2), ("A", "C", 3),
        ("B", "C", 1), ("B", "D", 4),
        ("C", "D", 5),
    ]

    mst, total = kruskals_mst(vertices, edges)
    print("MST edges:", mst)      # [('B','C',1), ('A','B',2), ('B','D',4)]
    print("Total weight:", total) # 7
