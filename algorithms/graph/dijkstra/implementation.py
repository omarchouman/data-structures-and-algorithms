import heapq

def dijkstra(graph, source):
    dist = {node: float("inf") for node in graph}
    dist[source] = 0
    prev = {node: None for node in graph}
    heap = [(0, source)]

    while heap:
        d, u = heapq.heappop(heap)
        if d > dist[u]:
            continue  # stale entry
        for v, weight in graph[u]:
            if dist[u] + weight < dist[v]:
                dist[v] = dist[u] + weight
                prev[v] = u
                heapq.heappush(heap, (dist[v], v))

    return dist, prev


def shortest_path(prev, source, target):
    path = []
    node = target
    while node is not None:
        path.append(node)
        node = prev[node]
    path.reverse()
    return path if path[0] == source else []


if __name__ == "__main__":
    # Adjacency list: {node: [(neighbour, weight), ...]}
    graph = {
        "A": [("B", 4), ("C", 1)],
        "B": [("D", 1)],
        "C": [("B", 2), ("D", 5)],
        "D": [],
    }

    dist, prev = dijkstra(graph, "A")
    print("Distances from A:", dist)
    # {'A': 0, 'B': 3, 'C': 1, 'D': 4}
    print("Path A → D:", shortest_path(prev, "A", "D"))
    # ['A', 'C', 'B', 'D']
