import java.util.ArrayList;
import java.util.List;

public class implementation {

    private static class Entry {
        String key;
        Object value;
        Entry(String key, Object value) { this.key = key; this.value = value; }
    }

    private final int capacity;
    private final List<List<Entry>> buckets;
    private int size;

    public implementation(int capacity) {
        this.capacity = capacity;
        this.buckets = new ArrayList<>(capacity);
        for (int i = 0; i < capacity; i++) buckets.add(new ArrayList<>());
    }

    public implementation() { this(16); }

    private int index(String key) {
        int hash = 0;
        for (char c : key.toCharArray()) hash = (hash * 31 + c) % capacity;
        return Math.abs(hash);
    }

    public void put(String key, Object value) {
        List<Entry> bucket = buckets.get(index(key));
        for (Entry e : bucket) {
            if (e.key.equals(key)) { e.value = value; return; }
        }
        bucket.add(new Entry(key, value));
        size++;
    }

    public Object get(String key) {
        for (Entry e : buckets.get(index(key))) {
            if (e.key.equals(key)) return e.value;
        }
        throw new RuntimeException("KeyError: " + key);
    }

    public void delete(String key) {
        List<Entry> bucket = buckets.get(index(key));
        bucket.removeIf(e -> { if (e.key.equals(key)) { size--; return true; } return false; });
    }

    public int size() { return size; }

    public String toString() {
        StringBuilder sb = new StringBuilder("{ ");
        for (List<Entry> bucket : buckets)
            for (Entry e : bucket) sb.append(e.key).append(": ").append(e.value).append(", ");
        if (sb.length() > 2) sb.setLength(sb.length() - 2);
        return sb.append(" }").toString();
    }

    public static void main(String[] args) {
        implementation ht = new implementation();
        ht.put("name", "Alice");
        ht.put("age", 30);
        ht.put("city", "Paris");

        System.out.println("Table: " + ht);
        System.out.println("Get 'name': " + ht.get("name"));   // Alice
        ht.put("age", 31);
        System.out.println("Updated age: " + ht.get("age"));   // 31
        ht.delete("city");
        System.out.println("After deleting 'city': " + ht);
        System.out.println("Size: " + ht.size());              // 2
    }
}
