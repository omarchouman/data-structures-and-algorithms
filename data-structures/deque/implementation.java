import java.util.LinkedList;

public class implementation {

    private final LinkedList<Integer> data = new LinkedList<>();

    public void pushFront(int value) { data.addFirst(value); }
    public void pushRear(int value)  { data.addLast(value); }

    public int popFront() {
        if (data.isEmpty()) throw new RuntimeException("Pop from empty deque");
        return data.removeFirst();
    }

    public int popRear() {
        if (data.isEmpty()) throw new RuntimeException("Pop from empty deque");
        return data.removeLast();
    }

    public int peekFront() {
        if (data.isEmpty()) throw new RuntimeException("Peek at empty deque");
        return data.getFirst();
    }

    public int peekRear() {
        if (data.isEmpty()) throw new RuntimeException("Peek at empty deque");
        return data.getLast();
    }

    public int size() { return data.size(); }

    public String toString() { return "front -> " + data + " <- rear"; }

    public static void main(String[] args) {
        implementation dq = new implementation();
        dq.pushRear(10);
        dq.pushRear(20);
        dq.pushFront(5);
        dq.pushFront(1);

        System.out.println("Deque: " + dq);                    // front -> [1, 5, 10, 20] <- rear
        System.out.println("Peek front: " + dq.peekFront());   // 1
        System.out.println("Peek rear: " + dq.peekRear());     // 20
        System.out.println("Pop front: " + dq.popFront());     // 1
        System.out.println("Pop rear: " + dq.popRear());       // 20
        System.out.println("Deque: " + dq);                    // front -> [5, 10] <- rear
    }
}
