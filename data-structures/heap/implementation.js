class MinHeap {
    constructor() { this._data = []; }

    push(value) {
        this._data.push(value);
        this._bubbleUp(this._data.length - 1);
    }

    pop() {
        if (!this._data.length) throw new Error("Pop from empty heap");
        [this._data[0], this._data[this._data.length - 1]] = [this._data[this._data.length - 1], this._data[0]];
        const val = this._data.pop();
        this._bubbleDown(0);
        return val;
    }

    peek() {
        if (!this._data.length) throw new Error("Peek at empty heap");
        return this._data[0];
    }

    _bubbleUp(i) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this._data[i] < this._data[parent]) {
                [this._data[i], this._data[parent]] = [this._data[parent], this._data[i]];
                i = parent;
            } else break;
        }
    }

    _bubbleDown(i) {
        const n = this._data.length;
        while (true) {
            let smallest = i;
            const left = 2 * i + 1, right = 2 * i + 2;
            if (left < n && this._data[left] < this._data[smallest]) smallest = left;
            if (right < n && this._data[right] < this._data[smallest]) smallest = right;
            if (smallest === i) break;
            [this._data[i], this._data[smallest]] = [this._data[smallest], this._data[i]];
            i = smallest;
        }
    }

    get size() { return this._data.length; }
    toString() { return this._data.toString(); }
}

const heap = new MinHeap();
[40, 10, 30, 20, 50].forEach(v => heap.push(v));

console.log("Heap array:", heap.toString());
console.log("Peek (min):", heap.peek());   // 10
console.log("Pop:", heap.pop());           // 10
console.log("Pop:", heap.pop());           // 20
console.log("Heap after pops:", heap.toString());
console.log("Size:", heap.size);
