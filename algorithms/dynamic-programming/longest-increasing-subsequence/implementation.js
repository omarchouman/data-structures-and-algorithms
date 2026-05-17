// O(n²) DP — returns length and the actual subsequence
function lisDp(arr) {
    if (!arr.length) return { length: 0, seq: [] };
    const n = arr.length;
    const dp = new Array(n).fill(1);
    const parent = new Array(n).fill(-1);

    for (let i = 1; i < n; i++)
        for (let j = 0; j < i; j++)
            if (arr[j] < arr[i] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                parent[i] = j;
            }

    let end = dp.indexOf(Math.max(...dp));
    const seq = [];
    while (end !== -1) { seq.push(arr[end]); end = parent[end]; }
    return { length: Math.max(...dp), seq: seq.reverse() };
}

// O(n log n) patience sorting — returns length only
function lisFast(arr) {
    const tails = [];
    for (const x of arr) {
        let lo = 0, hi = tails.length;
        while (lo < hi) { const mid = (lo + hi) >> 1; tails[mid] < x ? lo = mid + 1 : hi = mid; }
        tails[lo] = x;
    }
    return tails.length;
}

const data = [10, 9, 2, 5, 3, 7, 101, 18];
const { length, seq } = lisDp(data);
console.log("LIS length (DP):", length);       // 4
console.log("LIS sequence:", seq);              // [2, 3, 7, 101]
console.log("LIS length (fast):", lisFast(data)); // 4
