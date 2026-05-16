public class implementation {

    private int[] data;
    private int size;
    private int capacity;

    public implementation() {
        capacity = 2;
        data = new int[capacity];
        size = 0;
    }

    public void append(int value) {
        if (size == capacity) resize(capacity * 2);
        data[size++] = value;
    }

    public int get(int index) {
        if (index < 0 || index >= size) throw new ArrayIndexOutOfBoundsException("Index out of bounds");
        return data[index];
    }

    public void delete(int index) {
        if (index < 0 || index >= size) throw new ArrayIndexOutOfBoundsException("Index out of bounds");
        for (int i = index; i < size - 1; i++) data[i] = data[i + 1];
        data[--size] = 0;
        if (size > 0 && size == capacity / 4) resize(capacity / 2);
    }

    private void resize(int newCapacity) {
        int[] newData = new int[newCapacity];
        System.arraycopy(data, 0, newData, 0, size);
        data = newData;
        capacity = newCapacity;
    }

    public int length() { return size; }

    public void print() {
        System.out.print("[");
        for (int i = 0; i < size; i++) {
            System.out.print(data[i]);
            if (i < size - 1) System.out.print(", ");
        }
        System.out.println("]");
    }

    public static void main(String[] args) {
        implementation da = new implementation();
        int[] values = {10, 20, 30, 40, 50};
        for (int v : values) da.append(v);

        System.out.print("Array: ");           da.print();              // [10, 20, 30, 40, 50]
        System.out.println("Element at index 2: " + da.get(2));        // 30
        da.delete(1);
        System.out.print("After deleting index 1: "); da.print();      // [10, 30, 40, 50]
        System.out.println("Length: " + da.length());                  // 4
    }
}
