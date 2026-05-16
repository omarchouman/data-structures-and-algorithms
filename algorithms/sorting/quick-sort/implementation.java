import java.util.Arrays;

public class implementation {

    static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int p = partition(arr, low, high);
            quickSort(arr, low, p - 1);
            quickSort(arr, p + 1, high);
        }
    }

    static int partition(int[] arr, int low, int high) {
        // Median-of-three pivot
        int mid = (low + high) / 2;
        if (arr[mid] < arr[low]) swap(arr, low, mid);
        if (arr[high] < arr[low]) swap(arr, low, high);
        if (arr[mid] < arr[high]) swap(arr, mid, high);
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) swap(arr, ++i, j);
        }
        swap(arr, i + 1, high);
        return i + 1;
    }

    static void swap(int[] arr, int a, int b) {
        int tmp = arr[a]; arr[a] = arr[b]; arr[b] = tmp;
    }

    public static void main(String[] args) {
        int[] data = {10, 7, 8, 9, 1, 5};
        System.out.println("Before: " + Arrays.toString(data));
        quickSort(data, 0, data.length - 1);
        System.out.println("After:  " + Arrays.toString(data));  // [1, 5, 7, 8, 9, 10]
    }
}
