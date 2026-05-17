import heapq

def prims_mst(graph, start):
    """
    graph: {node: [(neighbour, weight), ...]} — undirected
    Returns (mst_edges, total_weight)
    """
    visited = set([start])
    heap = [(w, start, v) for v, w in graph[start]]
    heapq.heapify(heap)
    mst_edges = []
    total_weight = 0

    while heap and len(visited) < len(graph):
        w, u, v = heapq.heappop(heap)
        if v in visited:
            continue
        visited.add(v)
        mst_edges.append((u, v, w))
        total_weight += w
        for neighbour, weight in graph[v]:
            if neighbour not in visited:
                heapq.heappush(heap, (weight, v, neighbour))

    return mst_edges, total_weight


if __name__ == "__main__":
    graph = {
        "A": [("B", 2), ("C", 3)],
        "B": [("A", 2), ("C", 1), ("D", 4)],
        "C": [("A", 3), ("B", 1), ("D", 5)],
        "D": [("B", 4), ("C", 5)],
    }

    edges, total = prims_mst(graph, "A")
    print("MST edges:", edges)
    # [('A','B',2), ('B','C',1), ('B','D',4)]
    print("Total weight:", total)  # 7
