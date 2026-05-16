public class implementation {

    static int binarySearch(int[] arr, int target) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (arr[mid] == target) return mid;
            else if (target < arr[mid]) high = mid - 1;
            else low = mid + 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] data = {1, 3, 5, 7, 9, 11, 13, 15};
        System.out.println("Search 7: " + binarySearch(data, 7));   // 3
        System.out.println("Search 1: " + binarySearch(data, 1));   // 0
        System.out.println("Search 6: " + binarySearch(data, 6));   // -1
    }
}
