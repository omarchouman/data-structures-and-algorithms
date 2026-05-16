public class implementation {

    static class Node {
        int value;
        Node next;
        Node(int value) { this.value = value; }
    }

    private Node head;
    private int size;

    public void prepend(int value) {
        Node node = new Node(value);
        node.next = head;
        head = node;
        size++;
    }

    public void append(int value) {
        Node node = new Node(value);
        if (head == null) {
            head = node;
        } else {
            Node cur = head;
            while (cur.next != null) cur = cur.next;
            cur.next = node;
        }
        size++;
    }

    public void delete(int value) {
        if (head == null) return;
        if (head.value == value) { head = head.next; size--; return; }
        Node cur = head;
        while (cur.next != null && cur.next.value != value) cur = cur.next;
        if (cur.next != null) { cur.next = cur.next.next; size--; }
    }

    // Returns index of value or -1
    public int search(int value) {
        Node cur = head;
        int index = 0;
        while (cur != null) {
            if (cur.value == value) return index;
            cur = cur.next;
            index++;
        }
        return -1;
    }

    public int length() { return size; }

    public void print() {
        Node cur = head;
        while (cur != null) {
            System.out.print(cur.value);
            if (cur.next != null) System.out.print(" -> ");
            cur = cur.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        implementation ll = new implementation();
        ll.append(10);
        ll.append(20);
        ll.append(30);
        ll.prepend(5);

        System.out.print("List: ");       ll.print();                        // 5 -> 10 -> 20 -> 30
        System.out.println("Search 20: " + ll.search(20));                  // 2
        ll.delete(10);
        System.out.print("After deleting 10: "); ll.print();                // 5 -> 20 -> 30
        System.out.println("Length: " + ll.length());                       // 3
    }
}
