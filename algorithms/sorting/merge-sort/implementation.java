import java.util.Arrays;

public class implementation {

    static int[] mergeSort(int[] arr) {
        if (arr.length <= 1) return arr;
        int mid = arr.length / 2;
        return merge(mergeSort(Arrays.copyOfRange(arr, 0, mid)),
                     mergeSort(Arrays.copyOfRange(arr, mid, arr.length)));
    }

    static int[] merge(int[] left, int[] right) {
        int[] result = new int[left.length + right.length];
        int i = 0, j = 0, k = 0;
        while (i < left.length && j < right.length)
            result[k++] = (left[i] <= right[j]) ? left[i++] : right[j++];
        while (i < left.length) result[k++] = left[i++];
        while (j < right.length) result[k++] = right[j++];
        return result;
    }

    public static void main(String[] args) {
        int[] data = {38, 27, 43, 3, 9, 82, 10};
        System.out.println("Before: " + Arrays.toString(data));
        System.out.println("After:  " + Arrays.toString(mergeSort(data)));  // [3, 9, 10, 27, 38, 43, 82]
    }
}
