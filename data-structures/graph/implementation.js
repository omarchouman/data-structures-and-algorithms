class Graph {
    constructor(directed = false) {
        this._adj = new Map();
        this._directed = directed;
    }

    addVertex(v) {
        if (!this._adj.has(v)) this._adj.set(v, []);
    }

    addEdge(u, v, weight = null) {
        this.addVertex(u);
        this.addVertex(v);
        this._adj.get(u).push({ node: v, weight });
        if (!this._directed) this._adj.get(v).push({ node: u, weight });
    }

    neighbors(v) { return this._adj.get(v) || []; }

    vertices() { return [...this._adj.keys()]; }

    toString() {
        const lines = [];
        for (const [v, edges] of this._adj) {
            const n = edges.map(e => e.weight !== null ? `${e.node}(${e.weight})` : e.node).join(", ");
            lines.push(`${v} -> [${n}]`);
        }
        return lines.join("\n");
    }
}

// Undirected unweighted graph
const g = new Graph();
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("D", "E");

console.log("Graph:\n" + g.toString());
console.log("\nNeighbors of A:", g.neighbors("A").map(e => e.node)); // ['B', 'C']
console.log("Vertices:", g.vertices());

console.log("\n--- Weighted directed graph ---");
const wg = new Graph(true);
wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("C", "B", 1);
console.log(wg.toString());
