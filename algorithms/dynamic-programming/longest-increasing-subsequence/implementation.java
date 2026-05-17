import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class implementation {

    // O(n²) DP — returns length and actual subsequence
    static int lisDp(int[] arr, List<Integer> seq) {
        int n = arr.length;
        int[] dp = new int[n], parent = new int[n];
        Arrays.fill(dp, 1); Arrays.fill(parent, -1);

        for (int i = 1; i < n; i++)
            for (int j = 0; j < i; j++)
                if (arr[j] < arr[i] && dp[j] + 1 > dp[i]) { dp[i] = dp[j] + 1; parent[i] = j; }

        int maxLen = 0, end = 0;
        for (int i = 0; i < n; i++) if (dp[i] > maxLen) { maxLen = dp[i]; end = i; }

        while (end != -1) { seq.add(arr[end]); end = parent[end]; }
        Collections.reverse(seq);
        return maxLen;
    }

    // O(n log n) patience sorting — returns length only
    static int lisFast(int[] arr) {
        List<Integer> tails = new ArrayList<>();
        for (int x : arr) {
            int lo = 0, hi = tails.size();
            while (lo < hi) { int mid = (lo + hi) / 2; if (tails.get(mid) < x) lo = mid + 1; else hi = mid; }
            if (lo == tails.size()) tails.add(x); else tails.set(lo, x);
        }
        return tails.size();
    }

    public static void main(String[] args) {
        int[] data = {10, 9, 2, 5, 3, 7, 101, 18};
        List<Integer> seq = new ArrayList<>();
        System.out.println("LIS length (DP): " + lisDp(data, seq));  // 4
        System.out.println("LIS sequence: " + seq);                   // [2, 3, 7, 101]
        System.out.println("LIS length (fast): " + lisFast(data));    // 4
    }
}
