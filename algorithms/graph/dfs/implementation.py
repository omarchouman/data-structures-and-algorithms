def dfs_recursive(graph, node, visited=None, order=None):
    if visited is None:
        visited = set()
    if order is None:
        order = []
    visited.add(node)
    order.append(node)
    for neighbour in graph.get(node, []):
        if neighbour not in visited:
            dfs_recursive(graph, neighbour, visited, order)
    return order


def dfs_iterative(graph, start):
    visited = set()
    stack = [start]
    order = []

    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            order.append(node)
            for neighbour in reversed(graph.get(node, [])):
                if neighbour not in visited:
                    stack.append(neighbour)

    return order


if __name__ == "__main__":
    graph = {
        "A": ["B", "C"],
        "B": ["A", "D", "E"],
        "C": ["A", "F"],
        "D": ["B"],
        "E": ["B", "F"],
        "F": ["C", "E"],
    }

    print("DFS recursive from A:", dfs_recursive(graph, "A"))   # ['A', 'B', 'D', 'E', 'F', 'C']
    print("DFS iterative from A:", dfs_iterative(graph, "A"))   # ['A', 'B', 'D', 'E', 'F', 'C']
