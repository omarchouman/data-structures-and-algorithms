from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    order = []

    while queue:
        node = queue.popleft()
        order.append(node)
        for neighbour in graph.get(node, []):
            if neighbour not in visited:
                visited.add(neighbour)
                queue.append(neighbour)

    return order


def shortest_path(graph, start, end):
    visited = {start: None}
    queue = deque([start])

    while queue:
        node = queue.popleft()
        if node == end:
            path = []
            while node is not None:
                path.append(node)
                node = visited[node]
            return path[::-1]
        for neighbour in graph.get(node, []):
            if neighbour not in visited:
                visited[neighbour] = node
                queue.append(neighbour)

    return []


if __name__ == "__main__":
    graph = {
        "A": ["B", "C"],
        "B": ["A", "D", "E"],
        "C": ["A", "F"],
        "D": ["B"],
        "E": ["B", "F"],
        "F": ["C", "E"],
    }

    print("BFS from A:", bfs(graph, "A"))               # ['A', 'B', 'C', 'D', 'E', 'F']
    print("Shortest A→F:", shortest_path(graph, "A", "F"))  # ['A', 'C', 'F']
