import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class implementation {

    static int knapsack(int[] weights, int[] values, int capacity) {
        int[] dp = new int[capacity + 1];
        for (int i = 0; i < weights.length; i++)
            for (int w = capacity; w >= weights[i]; w--)
                dp[w] = Math.max(dp[w], values[i] + dp[w - weights[i]]);
        return dp[capacity];
    }

    static int knapsackWithItems(int[] weights, int[] values, int capacity, List<Integer> chosen) {
        int n = weights.length;
        int[][] dp = new int[n + 1][capacity + 1];
        for (int i = 1; i <= n; i++) {
            for (int w = 0; w <= capacity; w++) {
                dp[i][w] = dp[i - 1][w];
                if (weights[i - 1] <= w)
                    dp[i][w] = Math.max(dp[i][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
            }
        }
        int w = capacity;
        for (int i = n; i > 0; i--) {
            if (dp[i][w] != dp[i - 1][w]) { chosen.add(i - 1); w -= weights[i - 1]; }
        }
        Collections.reverse(chosen);
        return dp[n][capacity];
    }

    public static void main(String[] args) {
        int[] weights  = {2, 3, 4, 5};
        int[] values   = {3, 4, 5, 6};
        int   capacity = 8;

        System.out.println("Max value: " + knapsack(weights, values, capacity));  // 10

        List<Integer> chosen = new ArrayList<>();
        int maxVal = knapsackWithItems(weights, values, capacity, chosen);
        System.out.println("Max value: " + maxVal);            // 10
        System.out.println("Items chosen (indices): " + chosen); // [1, 3]
    }
}
