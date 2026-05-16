import java.util.ArrayList;

public class implementation {

    private final ArrayList<Integer> data = new ArrayList<>();

    public void push(int value) {
        data.add(value);
    }

    public int pop() {
        if (isEmpty()) throw new RuntimeException("Pop from empty stack");
        return data.remove(data.size() - 1);
    }

    public int peek() {
        if (isEmpty()) throw new RuntimeException("Peek at empty stack");
        return data.get(data.size() - 1);
    }

    public boolean isEmpty() { return data.isEmpty(); }

    public int size() { return data.size(); }

    public String toString() { return data + " <- top"; }

    public static void main(String[] args) {
        implementation stack = new implementation();
        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println("Stack: " + stack);             // [10, 20, 30] <- top
        System.out.println("Peek: " + stack.peek());       // 30
        System.out.println("Pop: " + stack.pop());         // 30
        System.out.println("Stack after pop: " + stack);   // [10, 20] <- top
        System.out.println("Size: " + stack.size());       // 2
    }
}
