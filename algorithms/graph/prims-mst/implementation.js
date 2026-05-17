class MinHeap {
    constructor() { this._d = []; }
    push(x) { this._d.push(x); this._up(this._d.length - 1); }
    pop() {
        const t = this._d[0], l = this._d.pop();
        if (this._d.length) { this._d[0] = l; this._down(0); }
        return t;
    }
    get size() { return this._d.length; }
    _up(i) { while (i > 0) { const p = (i-1)>>1; if (this._d[p][0] > this._d[i][0]) { [this._d[p],this._d[i]]=[this._d[i],this._d[p]]; i=p; } else break; } }
    _down(i) { const n=this._d.length; while(true){ let s=i,l=2*i+1,r=2*i+2; if(l<n&&this._d[l][0]<this._d[s][0])s=l; if(r<n&&this._d[r][0]<this._d[s][0])s=r; if(s===i)break; [this._d[i],this._d[s]]=[this._d[s],this._d[i]]; i=s; } }
}

function primsMST(graph, start) {
    const visited = new Set([start]);
    const heap = new MinHeap();
    for (const [v, w] of graph[start]) heap.push([w, start, v]);

    const mstEdges = [];
    let totalWeight = 0;

    while (heap.size && visited.size < Object.keys(graph).length) {
        const [w, u, v] = heap.pop();
        if (visited.has(v)) continue;
        visited.add(v);
        mstEdges.push([u, v, w]);
        totalWeight += w;
        for (const [neighbour, weight] of graph[v]) {
            if (!visited.has(neighbour)) heap.push([weight, v, neighbour]);
        }
    }
    return { mstEdges, totalWeight };
}

const graph = {
    A: [["B",2],["C",3]],
    B: [["A",2],["C",1],["D",4]],
    C: [["A",3],["B",1],["D",5]],
    D: [["B",4],["C",5]],
};

const { mstEdges, totalWeight } = primsMST(graph, "A");
console.log("MST edges:", mstEdges);   // [['A','B',2],['B','C',1],['B','D',4]]
console.log("Total weight:", totalWeight); // 7
