class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() { this.root = null; }

    insert(value) { this.root = this._insert(this.root, value); }
    _insert(node, value) {
        if (!node) return new Node(value);
        if (value < node.value) node.left = this._insert(node.left, value);
        else if (value > node.value) node.right = this._insert(node.right, value);
        return node;
    }

    search(value) { return this._search(this.root, value); }
    _search(node, value) {
        if (!node) return false;
        if (value === node.value) return true;
        return value < node.value ? this._search(node.left, value) : this._search(node.right, value);
    }

    delete(value) { this.root = this._delete(this.root, value); }
    _delete(node, value) {
        if (!node) return null;
        if (value < node.value) { node.left = this._delete(node.left, value); }
        else if (value > node.value) { node.right = this._delete(node.right, value); }
        else {
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            let successor = node.right;
            while (successor.left) successor = successor.left;
            node.value = successor.value;
            node.right = this._delete(node.right, successor.value);
        }
        return node;
    }

    inorder() {
        const result = [];
        const traverse = (node) => {
            if (node) { traverse(node.left); result.push(node.value); traverse(node.right); }
        };
        traverse(this.root);
        return result;
    }
}

const bst = new BST();
[50, 30, 70, 20, 40, 60, 80].forEach(v => bst.insert(v));

console.log("In-order:", bst.inorder());        // [20, 30, 40, 50, 60, 70, 80]
console.log("Search 40:", bst.search(40));      // true
console.log("Search 99:", bst.search(99));      // false
bst.delete(30);
console.log("After deleting 30:", bst.inorder()); // [20, 40, 50, 60, 70, 80]
