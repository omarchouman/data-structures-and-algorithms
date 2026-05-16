class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this._size = 0;
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this._size++;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let cur = this.head;
            while (cur.next) cur = cur.next;
            cur.next = node;
        }
        this._size++;
    }

    delete(value) {
        if (!this.head) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            this._size--;
            return;
        }
        let cur = this.head;
        while (cur.next && cur.next.value !== value) cur = cur.next;
        if (cur.next) { cur.next = cur.next.next; this._size--; }
    }

    // Returns index of value or -1
    search(value) {
        let cur = this.head, index = 0;
        while (cur) {
            if (cur.value === value) return index;
            cur = cur.next;
            index++;
        }
        return -1;
    }

    get length() { return this._size; }

    toString() {
        const values = [];
        let cur = this.head;
        while (cur) { values.push(cur.value); cur = cur.next; }
        return values.join(" -> ");
    }
}

const ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);
ll.prepend(5);

console.log("List:", ll.toString());          // 5 -> 10 -> 20 -> 30
console.log("Search 20:", ll.search(20));     // 2
ll.delete(10);
console.log("After deleting 10:", ll.toString()); // 5 -> 20 -> 30
console.log("Length:", ll.length);            // 3
