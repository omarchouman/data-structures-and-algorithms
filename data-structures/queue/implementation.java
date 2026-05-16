import java.util.LinkedList;

public class implementation {

    private final LinkedList<Integer> data = new LinkedList<>();

    public void enqueue(int value) {
        data.addLast(value);
    }

    public int dequeue() {
        if (isEmpty()) throw new RuntimeException("Dequeue from empty queue");
        return data.removeFirst();
    }

    public int peek() {
        if (isEmpty()) throw new RuntimeException("Peek at empty queue");
        return data.getFirst();
    }

    public boolean isEmpty() { return data.isEmpty(); }

    public int size() { return data.size(); }

    public String toString() { return "front -> " + data + " <- rear"; }

    public static void main(String[] args) {
        implementation q = new implementation();
        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);

        System.out.println("Queue: " + q);                  // front -> [10, 20, 30] <- rear
        System.out.println("Peek: " + q.peek());            // 10
        System.out.println("Dequeue: " + q.dequeue());      // 10
        System.out.println("Queue after dequeue: " + q);    // front -> [20, 30] <- rear
        System.out.println("Size: " + q.size());            // 2
    }
}
