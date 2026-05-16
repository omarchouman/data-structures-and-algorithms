import java.util.ArrayList;
import java.util.List;

public class implementation {

    private final List<Integer> data = new ArrayList<>();

    public void push(int value) {
        data.add(value);
        bubbleUp(data.size() - 1);
    }

    public int pop() {
        if (data.isEmpty()) throw new RuntimeException("Pop from empty heap");
        swap(0, data.size() - 1);
        int val = data.remove(data.size() - 1);
        bubbleDown(0);
        return val;
    }

    public int peek() {
        if (data.isEmpty()) throw new RuntimeException("Peek at empty heap");
        return data.get(0);
    }

    private void bubbleUp(int i) {
        while (i > 0) {
            int parent = (i - 1) / 2;
            if (data.get(i) < data.get(parent)) { swap(i, parent); i = parent; }
            else break;
        }
    }

    private void bubbleDown(int i) {
        int n = data.size();
        while (true) {
            int smallest = i, left = 2 * i + 1, right = 2 * i + 2;
            if (left < n && data.get(left) < data.get(smallest)) smallest = left;
            if (right < n && data.get(right) < data.get(smallest)) smallest = right;
            if (smallest == i) break;
            swap(i, smallest);
            i = smallest;
        }
    }

    private void swap(int a, int b) {
        int tmp = data.get(a);
        data.set(a, data.get(b));
        data.set(b, tmp);
    }

    public int size() { return data.size(); }

    public String toString() { return data.toString(); }

    public static void main(String[] args) {
        implementation heap = new implementation();
        for (int v : new int[]{40, 10, 30, 20, 50}) heap.push(v);

        System.out.println("Heap array: " + heap);
        System.out.println("Peek (min): " + heap.peek());   // 10
        System.out.println("Pop: " + heap.pop());           // 10
        System.out.println("Pop: " + heap.pop());           // 20
        System.out.println("Heap after pops: " + heap);
        System.out.println("Size: " + heap.size());
    }
}
