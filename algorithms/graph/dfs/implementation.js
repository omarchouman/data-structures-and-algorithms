function dfsRecursive(graph, node, visited = new Set(), order = []) {
    visited.add(node);
    order.push(node);
    for (const neighbour of (graph[node] || [])) {
        if (!visited.has(neighbour)) dfsRecursive(graph, neighbour, visited, order);
    }
    return order;
}

function dfsIterative(graph, start) {
    const visited = new Set();
    const stack = [start];
    const order = [];

    while (stack.length) {
        const node = stack.pop();
        if (!visited.has(node)) {
            visited.add(node);
            order.push(node);
            for (const neighbour of [...(graph[node] || [])].reverse()) {
                if (!visited.has(neighbour)) stack.push(neighbour);
            }
        }
    }
    return order;
}

const graph = {
    A: ["B", "C"], B: ["A", "D", "E"],
    C: ["A", "F"], D: ["B"],
    E: ["B", "F"], F: ["C", "E"],
};

console.log("DFS recursive from A:", dfsRecursive(graph, "A"));
console.log("DFS iterative from A:", dfsIterative(graph, "A"));
