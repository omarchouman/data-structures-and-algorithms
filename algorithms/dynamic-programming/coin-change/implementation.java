import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class implementation {

    static int[] coinChange(int[] coins, int amount) {
        int[] dp   = new int[amount + 1];
        int[] last = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        Arrays.fill(last, -1);
        dp[0] = 0;

        for (int i = 1; i <= amount; i++)
            for (int coin : coins)
                if (coin <= i && dp[i - coin] + 1 < dp[i]) { dp[i] = dp[i - coin] + 1; last[i] = coin; }

        if (dp[amount] > amount) return new int[]{-1};

        List<Integer> chosen = new ArrayList<>();
        int rem = amount;
        while (rem > 0) { chosen.add(last[rem]); rem -= last[rem]; }

        return chosen.stream().mapToInt(Integer::intValue).toArray();
    }

    public static void main(String[] args) {
        int[] result = coinChange(new int[]{1, 5, 10, 25}, 36);
        System.out.println("Min coins: " + result.length);          // 3
        System.out.println("Coins used: " + Arrays.toString(result)); // [25, 10, 1]

        System.out.println(Arrays.toString(coinChange(new int[]{2}, 3))); // [-1]
    }
}
