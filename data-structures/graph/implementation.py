class Graph:
    def __init__(self, directed=False):
        self._adj = {}
        self._directed = directed

    def add_vertex(self, v):
        if v not in self._adj:
            self._adj[v] = []

    def add_edge(self, u, v, weight=None):
        self.add_vertex(u)
        self.add_vertex(v)
        self._adj[u].append((v, weight))
        if not self._directed:
            self._adj[v].append((u, weight))

    def neighbors(self, v):
        return self._adj.get(v, [])

    def vertices(self):
        return list(self._adj.keys())

    def __repr__(self):
        lines = []
        for v, edges in self._adj.items():
            neighbors = ", ".join(f"{u}({w})" if w is not None else str(u) for u, w in edges)
            lines.append(f"{v} -> [{neighbors}]")
        return "\n".join(lines)


def main():
    # Undirected unweighted graph
    g = Graph()
    g.add_edge("A", "B")
    g.add_edge("A", "C")
    g.add_edge("B", "D")
    g.add_edge("C", "D")
    g.add_edge("D", "E")

    print("Graph:\n" + str(g))
    print("\nNeighbors of A:", [v for v, _ in g.neighbors("A")])  # ['B', 'C']
    print("Vertices:", g.vertices())

    print("\n--- Weighted directed graph ---")
    wg = Graph(directed=True)
    wg.add_edge("A", "B", 4)
    wg.add_edge("A", "C", 2)
    wg.add_edge("C", "B", 1)
    print(wg)

if __name__ == "__main__":
    main()
