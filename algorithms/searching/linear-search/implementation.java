public class implementation {

    static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) return i;
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] data = {4, 2, 7, 1, 9, 3};
        System.out.println("Search 7: " + linearSearch(data, 7));  // 2
        System.out.println("Search 5: " + linearSearch(data, 5));  // -1
    }
}
