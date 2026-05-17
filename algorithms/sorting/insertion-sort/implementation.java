import java.util.Arrays;

public class implementation {

    static int[] insertionSort(int[] arr) {
        int[] a = arr.clone();
        for (int i = 1; i < a.length; i++) {
            int key = a[i];
            int j = i - 1;
            while (j >= 0 && a[j] > key) {
                a[j + 1] = a[j];
                j--;
            }
            a[j + 1] = key;
        }
        return a;
    }

    public static void main(String[] args) {
        int[] data = {12, 11, 13, 5, 6};
        System.out.println("Before: " + Arrays.toString(data));
        System.out.println("After:  " + Arrays.toString(insertionSort(data)));  // [5, 6, 11, 12, 13]
    }
}
