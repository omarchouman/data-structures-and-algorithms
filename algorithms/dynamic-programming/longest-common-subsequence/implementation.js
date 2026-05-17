function lcsLength(s1, s2) {
    const m = s1.length, n = s2.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++)
        for (let j = 1; j <= n; j++)
            dp[i][j] = s1[i-1] === s2[j-1]
                ? dp[i-1][j-1] + 1
                : Math.max(dp[i-1][j], dp[i][j-1]);

    return dp[m][n];
}

function lcs(s1, s2) {
    const m = s1.length, n = s2.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++)
        for (let j = 1; j <= n; j++)
            dp[i][j] = s1[i-1] === s2[j-1]
                ? dp[i-1][j-1] + 1
                : Math.max(dp[i-1][j], dp[i][j-1]);

    // Backtrack
    let i = m, j = n, result = "";
    while (i > 0 && j > 0) {
        if (s1[i-1] === s2[j-1]) { result = s1[i-1] + result; i--; j--; }
        else if (dp[i-1][j] > dp[i][j-1]) i--;
        else j--;
    }
    return result;
}

const s1 = "ABCBDAB", s2 = "BDCAB";
console.log("LCS length:", lcsLength(s1, s2));  // 4
console.log("LCS string:", lcs(s1, s2));         // BCAB
