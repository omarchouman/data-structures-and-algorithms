class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    _height(node) { return node ? node.height : 0; }
    _bf(node) { return node ? this._height(node.left) - this._height(node.right) : 0; }
    _updateHeight(node) {
        node.height = 1 + Math.max(this._height(node.left), this._height(node.right));
    }

    _rotateLeft(z) {
        const y = z.right;
        z.right = y.left;
        y.left = z;
        this._updateHeight(z);
        this._updateHeight(y);
        return y;
    }

    _rotateRight(z) {
        const y = z.left;
        z.left = y.right;
        y.right = z;
        this._updateHeight(z);
        this._updateHeight(y);
        return y;
    }

    _rebalance(node) {
        this._updateHeight(node);
        const bf = this._bf(node);
        if (bf > 1) {
            if (this._bf(node.left) < 0) node.left = this._rotateLeft(node.left);
            return this._rotateRight(node);
        }
        if (bf < -1) {
            if (this._bf(node.right) > 0) node.right = this._rotateRight(node.right);
            return this._rotateLeft(node);
        }
        return node;
    }

    insert(node, value) {
        if (!node) return new Node(value);
        if (value < node.value) node.left = this.insert(node.left, value);
        else if (value > node.value) node.right = this.insert(node.right, value);
        else return node;
        return this._rebalance(node);
    }

    delete(node, value) {
        if (!node) return null;
        if (value < node.value) node.left = this.delete(node.left, value);
        else if (value > node.value) node.right = this.delete(node.right, value);
        else {
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            let successor = node.right;
            while (successor.left) successor = successor.left;
            node.value = successor.value;
            node.right = this.delete(node.right, successor.value);
        }
        return this._rebalance(node);
    }

    inorder(node, result = []) {
        if (node) { this.inorder(node.left, result); result.push(node.value); this.inorder(node.right, result); }
        return result;
    }
}

const avl = new AVLTree();
let root = null;
for (const v of [10, 20, 30, 40, 50, 25]) root = avl.insert(root, v);

console.log("In-order:", avl.inorder(root));   // [10, 20, 25, 30, 40, 50]
console.log("Root:", root.value);              // 30
root = avl.delete(root, 40);
console.log("After deleting 40:", avl.inorder(root));  // [10, 20, 25, 30, 50]
