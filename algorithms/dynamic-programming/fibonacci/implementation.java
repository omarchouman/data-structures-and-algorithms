import java.util.HashMap;
import java.util.Map;

public class implementation {

    // O(2^n) — included for contrast only
    static long fibNaive(int n) {
        if (n <= 1) return n;
        return fibNaive(n - 1) + fibNaive(n - 2);
    }

    // O(n) time, O(n) space — top-down memoisation
    static Map<Integer, Long> memo = new HashMap<>();
    static long fibMemo(int n) {
        if (memo.containsKey(n)) return memo.get(n);
        if (n <= 1) return n;
        long result = fibMemo(n - 1) + fibMemo(n - 2);
        memo.put(n, result);
        return result;
    }

    // O(n) time, O(n) space — bottom-up tabulation
    static long fibTab(int n) {
        if (n <= 1) return n;
        long[] dp = new long[n + 1];
        dp[1] = 1;
        for (int i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];
        return dp[n];
    }

    // O(n) time, O(1) space — space-optimised
    static long fib(int n) {
        if (n <= 1) return n;
        long a = 0, b = 1;
        for (int i = 2; i <= n; i++) { long tmp = a + b; a = b; b = tmp; }
        return b;
    }

    public static void main(String[] args) {
        for (int i : new int[]{0, 1, 5, 10, 20}) {
            System.out.printf("fib(%2d) = %d%n", i, fib(i));
        }
        // fib(20) = 6765
        System.out.println("\nNaive vs optimised (n=10): " + fibNaive(10) + " == " + fib(10));
    }
}
