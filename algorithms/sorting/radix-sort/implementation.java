import java.util.Arrays;

public class implementation {

    static int[] countingSortByDigit(int[] arr, int exp) {
        int n = arr.length;
        int[] output = new int[n];
        int[] count = new int[10];

        for (int val : arr) count[(val / exp) % 10]++;
        for (int i = 1; i < 10; i++) count[i] += count[i - 1];
        for (int i = n - 1; i >= 0; i--) {
            int digit = (arr[i] / exp) % 10;
            output[--count[digit]] = arr[i];
        }
        return output;
    }

    static int[] radixSort(int[] arr) {
        if (arr.length == 0) return arr;
        int[] a = arr.clone();
        int maxVal = Arrays.stream(a).max().getAsInt();
        for (int exp = 1; maxVal / exp > 0; exp *= 10) {
            a = countingSortByDigit(a, exp);
        }
        return a;
    }

    public static void main(String[] args) {
        int[] data = {170, 45, 75, 90, 802, 24, 2, 66};
        System.out.println("Before: " + Arrays.toString(data));
        System.out.println("After:  " + Arrays.toString(radixSort(data)));  // [2, 24, 45, 66, 75, 90, 170, 802]
    }
}
