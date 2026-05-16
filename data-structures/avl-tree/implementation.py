class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
        self.height = 1


class AVLTree:
    def insert(self, root, value):
        if not root:
            return Node(value)
        if value < root.value:
            root.left = self.insert(root.left, value)
        elif value > root.value:
            root.right = self.insert(root.right, value)
        else:
            return root  # duplicates not allowed

        root.height = 1 + max(self._height(root.left), self._height(root.right))
        return self._rebalance(root, value)

    def delete(self, root, value):
        if not root:
            return root
        if value < root.value:
            root.left = self.delete(root.left, value)
        elif value > root.value:
            root.right = self.delete(root.right, value)
        else:
            if not root.left:
                return root.right
            if not root.right:
                return root.left
            successor = root.right
            while successor.left:
                successor = successor.left
            root.value = successor.value
            root.right = self.delete(root.right, successor.value)

        root.height = 1 + max(self._height(root.left), self._height(root.right))
        bf = self._balance_factor(root)

        if bf > 1 and self._balance_factor(root.left) >= 0:
            return self._rotate_right(root)
        if bf > 1 and self._balance_factor(root.left) < 0:
            root.left = self._rotate_left(root.left)
            return self._rotate_right(root)
        if bf < -1 and self._balance_factor(root.right) <= 0:
            return self._rotate_left(root)
        if bf < -1 and self._balance_factor(root.right) > 0:
            root.right = self._rotate_right(root.right)
            return self._rotate_left(root)
        return root

    def _rebalance(self, root, value):
        bf = self._balance_factor(root)
        if bf > 1 and value < root.left.value:
            return self._rotate_right(root)
        if bf < -1 and value > root.right.value:
            return self._rotate_left(root)
        if bf > 1 and value > root.left.value:
            root.left = self._rotate_left(root.left)
            return self._rotate_right(root)
        if bf < -1 and value < root.right.value:
            root.right = self._rotate_right(root.right)
            return self._rotate_left(root)
        return root

    def _rotate_left(self, z):
        y = z.right
        z.right = y.left
        y.left = z
        z.height = 1 + max(self._height(z.left), self._height(z.right))
        y.height = 1 + max(self._height(y.left), self._height(y.right))
        return y

    def _rotate_right(self, z):
        y = z.left
        z.left = y.right
        y.right = z
        z.height = 1 + max(self._height(z.left), self._height(z.right))
        y.height = 1 + max(self._height(y.left), self._height(y.right))
        return y

    def _height(self, node):
        return node.height if node else 0

    def _balance_factor(self, node):
        return self._height(node.left) - self._height(node.right) if node else 0

    def inorder(self, root, result=None):
        if result is None:
            result = []
        if root:
            self.inorder(root.left, result)
            result.append(root.value)
            self.inorder(root.right, result)
        return result


def main():
    avl = AVLTree()
    root = None
    for val in [10, 20, 30, 40, 50, 25]:
        root = avl.insert(root, val)

    print("In-order:", avl.inorder(root))   # [10, 20, 25, 30, 40, 50]
    print("Root:", root.value)              # 30 (balanced)
    root = avl.delete(root, 40)
    print("After deleting 40:", avl.inorder(root))  # [10, 20, 25, 30, 50]


if __name__ == "__main__":
    main()
