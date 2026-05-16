function bfs(graph, start) {
    const visited = new Set([start]);
    const queue = [start];
    const order = [];

    while (queue.length) {
        const node = queue.shift();
        order.push(node);
        for (const neighbour of (graph[node] || [])) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour);
                queue.push(neighbour);
            }
        }
    }
    return order;
}

function shortestPath(graph, start, end) {
    const visited = new Map([[start, null]]);
    const queue = [start];

    while (queue.length) {
        const node = queue.shift();
        if (node === end) {
            const path = [];
            let cur = end;
            while (cur !== null) { path.push(cur); cur = visited.get(cur); }
            return path.reverse();
        }
        for (const neighbour of (graph[node] || [])) {
            if (!visited.has(neighbour)) {
                visited.set(neighbour, node);
                queue.push(neighbour);
            }
        }
    }
    return [];
}

const graph = {
    A: ["B", "C"], B: ["A", "D", "E"],
    C: ["A", "F"], D: ["B"],
    E: ["B", "F"], F: ["C", "E"],
};

console.log("BFS from A:", bfs(graph, "A"));                // ['A', 'B', 'C', 'D', 'E', 'F']
console.log("Shortest A→F:", shortestPath(graph, "A", "F")); // ['A', 'C', 'F']
