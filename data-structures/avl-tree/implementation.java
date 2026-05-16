import java.util.ArrayList;
import java.util.List;

public class implementation {

    static class Node {
        int value, height;
        Node left, right;
        Node(int v) { value = v; height = 1; }
    }

    private int height(Node n) { return n == null ? 0 : n.height; }
    private int bf(Node n) { return n == null ? 0 : height(n.left) - height(n.right); }
    private void updateHeight(Node n) { n.height = 1 + Math.max(height(n.left), height(n.right)); }

    private Node rotateLeft(Node z) {
        Node y = z.right; z.right = y.left; y.left = z;
        updateHeight(z); updateHeight(y); return y;
    }

    private Node rotateRight(Node z) {
        Node y = z.left; z.left = y.right; y.right = z;
        updateHeight(z); updateHeight(y); return y;
    }

    private Node rebalance(Node node) {
        updateHeight(node);
        int b = bf(node);
        if (b > 1)  { if (bf(node.left) < 0)  node.left  = rotateLeft(node.left);  return rotateRight(node); }
        if (b < -1) { if (bf(node.right) > 0) node.right = rotateRight(node.right); return rotateLeft(node);  }
        return node;
    }

    public Node insert(Node node, int value) {
        if (node == null) return new Node(value);
        if (value < node.value) node.left  = insert(node.left,  value);
        else if (value > node.value) node.right = insert(node.right, value);
        else return node;
        return rebalance(node);
    }

    public Node delete(Node node, int value) {
        if (node == null) return null;
        if (value < node.value) node.left  = delete(node.left,  value);
        else if (value > node.value) node.right = delete(node.right, value);
        else {
            if (node.left == null)  return node.right;
            if (node.right == null) return node.left;
            Node s = node.right;
            while (s.left != null) s = s.left;
            node.value = s.value;
            node.right = delete(node.right, s.value);
        }
        return rebalance(node);
    }

    public List<Integer> inorder(Node node, List<Integer> result) {
        if (node != null) { inorder(node.left, result); result.add(node.value); inorder(node.right, result); }
        return result;
    }

    public static void main(String[] args) {
        implementation avl = new implementation();
        Node root = null;
        for (int v : new int[]{10, 20, 30, 40, 50, 25}) root = avl.insert(root, v);

        System.out.println("In-order: " + avl.inorder(root, new ArrayList<>()));  // [10, 20, 25, 30, 40, 50]
        System.out.println("Root: " + root.value);                                 // 30
        root = avl.delete(root, 40);
        System.out.println("After deleting 40: " + avl.inorder(root, new ArrayList<>())); // [10, 20, 25, 30, 50]
    }
}
