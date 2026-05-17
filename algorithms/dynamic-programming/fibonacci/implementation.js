// O(2^n) — included for contrast only
function fibNaive(n) {
    if (n <= 1) return n;
    return fibNaive(n - 1) + fibNaive(n - 2);
}

// O(n) time, O(n) space — top-down with memoisation
function fibMemo(n, memo = new Map()) {
    if (memo.has(n)) return memo.get(n);
    if (n <= 1) return n;
    const result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    memo.set(n, result);
    return result;
}

// O(n) time, O(n) space — bottom-up tabulation
function fibTab(n) {
    if (n <= 1) return n;
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
    return dp[n];
}

// O(n) time, O(1) space — space-optimised
function fib(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
    return b;
}

for (const i of [0, 1, 5, 10, 20]) {
    console.log(`fib(${i}) = ${fib(i)}`);
}
// fib(20) = 6765

console.log("\nNaive vs optimised (n=10):", fibNaive(10), "==", fib(10));
