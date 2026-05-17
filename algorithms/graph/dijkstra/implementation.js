class MinHeap {
    constructor() { this._data = []; }
    push(item) { this._data.push(item); this._bubbleUp(this._data.length - 1); }
    pop() {
        const top = this._data[0];
        const last = this._data.pop();
        if (this._data.length) { this._data[0] = last; this._siftDown(0); }
        return top;
    }
    get size() { return this._data.length; }
    _bubbleUp(i) {
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this._data[p][0] > this._data[i][0]) {
                [this._data[p], this._data[i]] = [this._data[i], this._data[p]]; i = p;
            } else break;
        }
    }
    _siftDown(i) {
        const n = this._data.length;
        while (true) {
            let s = i, l = 2*i+1, r = 2*i+2;
            if (l < n && this._data[l][0] < this._data[s][0]) s = l;
            if (r < n && this._data[r][0] < this._data[s][0]) s = r;
            if (s === i) break;
            [this._data[i], this._data[s]] = [this._data[s], this._data[i]]; i = s;
        }
    }
}

function dijkstra(graph, source) {
    const dist = {}, prev = {};
    for (const node of Object.keys(graph)) { dist[node] = Infinity; prev[node] = null; }
    dist[source] = 0;
    const heap = new MinHeap();
    heap.push([0, source]);

    while (heap.size) {
        const [d, u] = heap.pop();
        if (d > dist[u]) continue;
        for (const [v, w] of graph[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                prev[v] = u;
                heap.push([dist[v], v]);
            }
        }
    }
    return { dist, prev };
}

function shortestPath(prev, source, target) {
    const path = [];
    let node = target;
    while (node !== null) { path.push(node); node = prev[node]; }
    path.reverse();
    return path[0] === source ? path : [];
}

const graph = {
    A: [["B", 4], ["C", 1]],
    B: [["D", 1]],
    C: [["B", 2], ["D", 5]],
    D: [],
};

const { dist, prev } = dijkstra(graph, "A");
console.log("Distances from A:", dist);
// { A: 0, B: 3, C: 1, D: 4 }
console.log("Path A → D:", shortestPath(prev, "A", "D"));
// ['A', 'C', 'B', 'D']
