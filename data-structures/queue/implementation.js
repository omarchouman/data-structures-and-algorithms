class Queue {
    constructor() {
        this._data = [];
        this._front = 0;
    }

    enqueue(value) {
        this._data.push(value);
    }

    dequeue() {
        if (this.isEmpty()) throw new Error("Dequeue from empty queue");
        return this._data[this._front++];
    }

    peek() {
        if (this.isEmpty()) throw new Error("Peek at empty queue");
        return this._data[this._front];
    }

    isEmpty() { return this._front >= this._data.length; }

    get size() { return this._data.length - this._front; }

    toString() {
        return "front -> " + this._data.slice(this._front).join(", ") + " <- rear";
    }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log("Queue:", q.toString());           // front -> 10, 20, 30 <- rear
console.log("Peek:", q.peek());                // 10
console.log("Dequeue:", q.dequeue());          // 10
console.log("Queue after dequeue:", q.toString()); // front -> 20, 30 <- rear
console.log("Size:", q.size);                  // 2
