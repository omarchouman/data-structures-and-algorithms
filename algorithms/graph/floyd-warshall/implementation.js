const INF = Infinity;

function floydWarshall(n, edges) {
    const dist = Array.from({ length: n }, (_, i) =>
        Array.from({ length: n }, (_, j) => (i === j ? 0 : INF))
    );
    for (const [u, v, w] of edges) dist[u][v] = w;

    for (let k = 0; k < n; k++)
        for (let i = 0; i < n; i++)
            for (let j = 0; j < n; j++)
                if (dist[i][k] + dist[k][j] < dist[i][j])
                    dist[i][j] = dist[i][k] + dist[k][j];

    const hasNegCycle = dist.some((row, i) => row[i] < 0);
    return { dist, hasNegCycle };
}

function printMatrix(dist, labels) {
    console.log("     " + labels.map(l => l.padStart(5)).join(""));
    dist.forEach((row, i) => {
        const vals = row.map(v => (v === INF ? "  INF" : String(v).padStart(5))).join("");
        console.log(`  ${labels[i]}  ${vals}`);
    });
}

// 4 nodes: 0=A, 1=B, 2=C, 3=D
const edges = [
    [0,1,3],[0,3,7],[1,0,8],[1,2,2],
    [2,0,5],[2,3,1],[3,0,2],
];
const { dist, hasNegCycle } = floydWarshall(4, edges);
printMatrix(dist, ["A","B","C","D"]);
console.log("Negative cycle:", hasNegCycle);
