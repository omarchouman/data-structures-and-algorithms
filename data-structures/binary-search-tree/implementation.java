import java.util.ArrayList;
import java.util.List;

public class implementation {

    static class Node {
        int value;
        Node left, right;
        Node(int value) { this.value = value; }
    }

    private Node root;

    public void insert(int value) { root = insert(root, value); }
    private Node insert(Node node, int value) {
        if (node == null) return new Node(value);
        if (value < node.value) node.left = insert(node.left, value);
        else if (value > node.value) node.right = insert(node.right, value);
        return node;
    }

    public boolean search(int value) { return search(root, value); }
    private boolean search(Node node, int value) {
        if (node == null) return false;
        if (value == node.value) return true;
        return value < node.value ? search(node.left, value) : search(node.right, value);
    }

    public void delete(int value) { root = delete(root, value); }
    private Node delete(Node node, int value) {
        if (node == null) return null;
        if (value < node.value) node.left = delete(node.left, value);
        else if (value > node.value) node.right = delete(node.right, value);
        else {
            if (node.left == null) return node.right;
            if (node.right == null) return node.left;
            Node successor = node.right;
            while (successor.left != null) successor = successor.left;
            node.value = successor.value;
            node.right = delete(node.right, successor.value);
        }
        return node;
    }

    public List<Integer> inorder() {
        List<Integer> result = new ArrayList<>();
        inorder(root, result);
        return result;
    }
    private void inorder(Node node, List<Integer> result) {
        if (node != null) {
            inorder(node.left, result);
            result.add(node.value);
            inorder(node.right, result);
        }
    }

    public static void main(String[] args) {
        implementation bst = new implementation();
        for (int v : new int[]{50, 30, 70, 20, 40, 60, 80}) bst.insert(v);

        System.out.println("In-order: " + bst.inorder());      // [20, 30, 40, 50, 60, 70, 80]
        System.out.println("Search 40: " + bst.search(40));    // true
        System.out.println("Search 99: " + bst.search(99));    // false
        bst.delete(30);
        System.out.println("After deleting 30: " + bst.inorder()); // [20, 40, 50, 60, 70, 80]
    }
}
