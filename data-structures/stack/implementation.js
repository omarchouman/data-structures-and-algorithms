class Stack {
    constructor() {
        this._data = [];
    }

    push(value) {
        this._data.push(value);
    }

    pop() {
        if (this.isEmpty()) throw new Error("Pop from empty stack");
        return this._data.pop();
    }

    peek() {
        if (this.isEmpty()) throw new Error("Peek at empty stack");
        return this._data[this._data.length - 1];
    }

    isEmpty() { return this._data.length === 0; }

    get size() { return this._data.length; }

    toString() { return this._data.toString() + " <- top"; }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack:", stack.toString());        // 10,20,30 <- top
console.log("Peek:", stack.peek());             // 30
console.log("Pop:", stack.pop());               // 30
console.log("Stack after pop:", stack.toString()); // 10,20 <- top
console.log("Size:", stack.size);               // 2
