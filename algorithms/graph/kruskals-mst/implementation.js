class UnionFind {
    constructor(nodes) {
        this.parent = {};
        this.rank = {};
        for (const n of nodes) { this.parent[n] = n; this.rank[n] = 0; }
    }
    find(x) {
        if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }
    union(x, y) {
        let rx = this.find(x), ry = this.find(y);
        if (rx === ry) return false;
        if (this.rank[rx] < this.rank[ry]) [rx, ry] = [ry, rx];
        this.parent[ry] = rx;
        if (this.rank[rx] === this.rank[ry]) this.rank[rx]++;
        return true;
    }
}

function kruskalsMST(vertices, edges) {
    const uf = new UnionFind(vertices);
    const sorted = [...edges].sort((a, b) => a[2] - b[2]);
    const mstEdges = [];
    let totalWeight = 0;

    for (const [u, v, w] of sorted) {
        if (uf.union(u, v)) {
            mstEdges.push([u, v, w]);
            totalWeight += w;
            if (mstEdges.length === vertices.length - 1) break;
        }
    }
    return { mstEdges, totalWeight };
}

const vertices = ["A", "B", "C", "D"];
const edges = [
    ["A","B",2],["A","C",3],
    ["B","C",1],["B","D",4],
    ["C","D",5],
];

const { mstEdges, totalWeight } = kruskalsMST(vertices, edges);
console.log("MST edges:", mstEdges);       // [['B','C',1],['A','B',2],['B','D',4]]
console.log("Total weight:", totalWeight); // 7
