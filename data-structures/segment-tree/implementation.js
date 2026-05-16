class SegmentTree {
    constructor(data) {
        this.n = data.length;
        this.tree = new Array(4 * this.n).fill(0);
        if (this.n) this._build(data, 0, 0, this.n - 1);
    }

    _build(data, node, start, end) {
        if (start === end) { this.tree[node] = data[start]; return; }
        const mid = (start + end) >> 1;
        this._build(data, 2 * node + 1, start, mid);
        this._build(data, 2 * node + 2, mid + 1, end);
        this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
    }

    query(l, r) { return this._query(0, 0, this.n - 1, l, r); }
    _query(node, start, end, l, r) {
        if (r < start || end < l) return 0;
        if (l <= start && end <= r) return this.tree[node];
        const mid = (start + end) >> 1;
        return this._query(2 * node + 1, start, mid, l, r) +
               this._query(2 * node + 2, mid + 1, end, l, r);
    }

    update(index, value) { this._update(0, 0, this.n - 1, index, value); }
    _update(node, start, end, index, value) {
        if (start === end) { this.tree[node] = value; return; }
        const mid = (start + end) >> 1;
        if (index <= mid) this._update(2 * node + 1, start, mid, index, value);
        else              this._update(2 * node + 2, mid + 1, end, index, value);
        this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
    }
}

const st = new SegmentTree([1, 3, 5, 7, 9, 11]);

console.log("Sum [1, 3]:", st.query(1, 3));   // 15
console.log("Sum [0, 5]:", st.query(0, 5));   // 36
st.update(1, 10);
console.log("After update(1, 10):");
console.log("Sum [1, 3]:", st.query(1, 3));   // 22
