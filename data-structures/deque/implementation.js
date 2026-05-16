class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class Deque {
    constructor() {
        this._front = null;
        this._rear = null;
        this._size = 0;
    }

    pushFront(value) {
        const node = new Node(value);
        if (!this._front) {
            this._front = this._rear = node;
        } else {
            node.next = this._front;
            this._front.prev = node;
            this._front = node;
        }
        this._size++;
    }

    pushRear(value) {
        const node = new Node(value);
        if (!this._rear) {
            this._front = this._rear = node;
        } else {
            node.prev = this._rear;
            this._rear.next = node;
            this._rear = node;
        }
        this._size++;
    }

    popFront() {
        if (!this._front) throw new Error("Pop from empty deque");
        const val = this._front.value;
        this._front = this._front.next;
        if (this._front) this._front.prev = null;
        else this._rear = null;
        this._size--;
        return val;
    }

    popRear() {
        if (!this._rear) throw new Error("Pop from empty deque");
        const val = this._rear.value;
        this._rear = this._rear.prev;
        if (this._rear) this._rear.next = null;
        else this._front = null;
        this._size--;
        return val;
    }

    peekFront() {
        if (!this._front) throw new Error("Peek at empty deque");
        return this._front.value;
    }

    peekRear() {
        if (!this._rear) throw new Error("Peek at empty deque");
        return this._rear.value;
    }

    get size() { return this._size; }

    toString() {
        const vals = [];
        let cur = this._front;
        while (cur) { vals.push(cur.value); cur = cur.next; }
        return "front -> [" + vals.join(", ") + "] <- rear";
    }
}

const dq = new Deque();
dq.pushRear(10);
dq.pushRear(20);
dq.pushFront(5);
dq.pushFront(1);

console.log("Deque:", dq.toString());          // front -> [1, 5, 10, 20] <- rear
console.log("Peek front:", dq.peekFront());    // 1
console.log("Peek rear:", dq.peekRear());      // 20
console.log("Pop front:", dq.popFront());      // 1
console.log("Pop rear:", dq.popRear());        // 20
console.log("Deque:", dq.toString());          // front -> [5, 10] <- rear
