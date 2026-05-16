class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
        this.components = n;
    }

    find(x) {
        if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]); // path compression
        return this.parent[x];
    }

    union(x, y) {
        let rx = this.find(x), ry = this.find(y);
        if (rx === ry) return false;
        if (this.rank[rx] < this.rank[ry]) [rx, ry] = [ry, rx];
        this.parent[ry] = rx;
        if (this.rank[rx] === this.rank[ry]) this.rank[rx]++;
        this.components--;
        return true;
    }

    connected(x, y) { return this.find(x) === this.find(y); }
}

const uf = new UnionFind(6);
uf.union(0, 1);
uf.union(1, 2);
uf.union(3, 4);

console.log("0 and 2 connected:", uf.connected(0, 2));  // true
console.log("0 and 3 connected:", uf.connected(0, 3));  // false
console.log("Components:", uf.components);               // 3

uf.union(2, 3);
console.log("After union(2,3):");
console.log("0 and 4 connected:", uf.connected(0, 4));  // true
console.log("Components:", uf.components);               // 2
