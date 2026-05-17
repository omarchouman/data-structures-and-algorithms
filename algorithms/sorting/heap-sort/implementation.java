import java.util.Arrays;

public class implementation {

    static void heapify(int[] a, int size, int i) {
        int largest = i, left = 2 * i + 1, right = 2 * i + 2;
        if (left  < size && a[left]  > a[largest]) largest = left;
        if (right < size && a[right] > a[largest]) largest = right;
        if (largest != i) {
            int tmp = a[i]; a[i] = a[largest]; a[largest] = tmp;
            heapify(a, size, largest);
        }
    }

    static int[] heapSort(int[] arr) {
        int[] a = arr.clone();
        int n = a.length;

        // Build max-heap
        for (int i = n / 2 - 1; i >= 0; i--) heapify(a, n, i);

        // Extract elements
        for (int i = n - 1; i > 0; i--) {
            int tmp = a[0]; a[0] = a[i]; a[i] = tmp;
            heapify(a, i, 0);
        }
        return a;
    }

    public static void main(String[] args) {
        int[] data = {12, 11, 13, 5, 6, 7};
        System.out.println("Before: " + Arrays.toString(data));
        System.out.println("After:  " + Arrays.toString(heapSort(data)));  // [5, 6, 7, 11, 12, 13]
    }
}
