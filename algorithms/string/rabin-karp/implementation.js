const BASE = 256;
const MOD = 101;

function rabinKarp(text, pattern) {
    const n = text.length, m = pattern.length;
    if (m > n) return [];

    let h = 1;
    for (let i = 0; i < m - 1; i++) h = (h * BASE) % MOD;

    let patHash = 0, winHash = 0;
    for (let i = 0; i < m; i++) {
        patHash = (BASE * patHash + pattern.charCodeAt(i)) % MOD;
        winHash = (BASE * winHash + text.charCodeAt(i)) % MOD;
    }

    const matches = [];
    for (let i = 0; i <= n - m; i++) {
        if (patHash === winHash && text.slice(i, i + m) === pattern)
            matches.push(i);
        if (i < n - m) {
            winHash = (BASE * (winHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % MOD;
            if (winHash < 0) winHash += MOD;
        }
    }
    return matches;
}

console.log(rabinKarp("ABCABCABC", "ABC"));         // [0, 3, 6]
console.log(rabinKarp("AABAACAADAABAABA", "AABA")); // [0, 9, 12]
console.log(rabinKarp("AAAAAA", "AA"));             // [0, 1, 2, 3, 4]
console.log(rabinKarp("HELLO", "WORLD"));           // []
