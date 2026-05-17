function knapsack(weights, values, capacity) {
    const dp = new Array(capacity + 1).fill(0);
    for (let i = 0; i < weights.length; i++) {
        for (let w = capacity; w >= weights[i]; w--) {
            dp[w] = Math.max(dp[w], values[i] + dp[w - weights[i]]);
        }
    }
    return dp[capacity];
}

function knapsackWithItems(weights, values, capacity) {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            dp[i][w] = dp[i - 1][w];
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
            }
        }
    }

    const chosen = [];
    let w = capacity;
    for (let i = n; i > 0; i--) {
        if (dp[i][w] !== dp[i - 1][w]) { chosen.push(i - 1); w -= weights[i - 1]; }
    }
    return { maxValue: dp[n][capacity], items: chosen.reverse() };
}

const weights  = [2, 3, 4, 5];
const values   = [3, 4, 5, 6];
const capacity = 8;

console.log("Max value:", knapsack(weights, values, capacity));  // 10

const { maxValue, items } = knapsackWithItems(weights, values, capacity);
console.log("Max value:", maxValue);          // 10
console.log("Items chosen (indices):", items); // [1, 3]
