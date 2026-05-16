public class implementation {

    static int[] data;
    static int size = 0;

    static void insert(int value) {
        if (size >= data.length) throw new RuntimeException("Array is full");
        data[size++] = value;
    }

    static int access(int index) {
        if (index < 0 || index >= size) throw new ArrayIndexOutOfBoundsException("Index out of bounds");
        return data[index];
    }

    // Returns index of value or -1 if not found
    static int search(int value) {
        for (int i = 0; i < size; i++) {
            if (data[i] == value) return i;
        }
        return -1;
    }

    static void delete(int index) {
        if (index < 0 || index >= size) throw new ArrayIndexOutOfBoundsException("Index out of bounds");
        for (int i = index; i < size - 1; i++) {
            data[i] = data[i + 1];
        }
        data[--size] = 0;
    }

    static void print() {
        System.out.print("[");
        for (int i = 0; i < size; i++) {
            System.out.print(data[i]);
            if (i < size - 1) System.out.print(", ");
        }
        System.out.println("]");
    }

    public static void main(String[] args) {
        data = new int[5];

        insert(10);
        insert(20);
        insert(30);
        insert(40);
        insert(50);

        System.out.print("Array: ");        print();          // [10, 20, 30, 40, 50]
        System.out.println("Access index 2: " + access(2));  // 30
        System.out.println("Search 40: " + search(40));      // 3
        delete(1);
        System.out.print("After deleting index 1: "); print(); // [10, 30, 40, 50]
    }
}
