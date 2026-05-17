function bellmanFord(vertices, edges, source) {
    const dist = {};
    for (const v of vertices) dist[v] = Infinity;
    dist[source] = 0;

    for (let i = 0; i < vertices.length - 1; i++) {
        for (const [u, v, w] of edges) {
            if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
            }
        }
    }

    // Detect negative cycle
    for (const [u, v, w] of edges) {
        if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
            return { dist, hasNegativeCycle: true };
        }
    }

    return { dist, hasNegativeCycle: false };
}

const vertices = ["A", "B", "C", "D", "E"];
const edges = [
    ["A", "B", -1], ["A", "C",  4],
    ["B", "C",  3], ["B", "D",  2], ["B", "E",  2],
    ["D", "B",  1], ["D", "C",  5], ["E", "D", -3],
];

const { dist, hasNegativeCycle } = bellmanFord(vertices, edges, "A");
console.log("Distances from A:", dist);
// { A: 0, B: -1, C: 2, D: -2, E: 1 }
console.log("Negative cycle:", hasNegativeCycle);  // false
