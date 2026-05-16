import java.util.Arrays;

public class implementation {

    static int[] bubbleSort(int[] arr) {
        int[] a = arr.clone();
        int n = a.length;
        for (int i = 0; i < n; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - 1 - i; j++) {
                if (a[j] > a[j + 1]) {
                    int tmp = a[j]; a[j] = a[j + 1]; a[j + 1] = tmp;
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
        return a;
    }

    public static void main(String[] args) {
        int[] data = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Before: " + Arrays.toString(data));
        System.out.println("After:  " + Arrays.toString(bubbleSort(data)));  // [11, 12, 22, 25, 34, 64, 90]
    }
}
