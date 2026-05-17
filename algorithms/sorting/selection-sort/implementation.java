import java.util.Arrays;

public class implementation {

    static int[] selectionSort(int[] arr) {
        int[] a = arr.clone();
        int n = a.length;
        for (int i = 0; i < n; i++) {
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
                if (a[j] < a[minIdx]) minIdx = j;
            }
            int tmp = a[i]; a[i] = a[minIdx]; a[minIdx] = tmp;
        }
        return a;
    }

    public static void main(String[] args) {
        int[] data = {64, 25, 12, 22, 11};
        System.out.println("Before: " + Arrays.toString(data));
        System.out.println("After:  " + Arrays.toString(selectionSort(data)));  // [11, 12, 22, 25, 64]
    }
}
