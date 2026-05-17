function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1);
    const last = new Array(amount + 1).fill(-1);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i && dp[i - coin] + 1 < dp[i]) {
                dp[i] = dp[i - coin] + 1;
                last[i] = coin;
            }
        }
    }

    if (dp[amount] > amount) return { count: -1, coins: [] };

    const chosen = [];
    let rem = amount;
    while (rem > 0) { chosen.push(last[rem]); rem -= last[rem]; }
    return { count: dp[amount], coins: chosen };
}

const { count, coins: used } = coinChange([1, 5, 10, 25], 36);
console.log("Min coins:", count);   // 3
console.log("Coins used:", used);   // [25, 10, 1]

console.log(coinChange([2], 3));    // { count: -1, coins: [] }
