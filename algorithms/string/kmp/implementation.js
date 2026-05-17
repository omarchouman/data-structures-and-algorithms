function buildLPS(pattern) {
    const m = pattern.length;
    const lps = new Array(m).fill(0);
    let length = 0, i = 1;
    while (i < m) {
        if (pattern[i] === pattern[length]) {
            lps[i++] = ++length;
        } else if (length) {
            length = lps[length - 1];
        } else {
            lps[i++] = 0;
        }
    }
    return lps;
}

function kmpSearch(text, pattern) {
    const n = text.length, m = pattern.length;
    if (m === 0) return [];

    const lps = buildLPS(pattern);
    const matches = [];
    let i = 0, j = 0;

    while (i < n) {
        if (text[i] === pattern[j]) { i++; j++; }
        if (j === m) {
            matches.push(i - j);
            j = lps[j - 1];
        } else if (i < n && text[i] !== pattern[j]) {
            j ? (j = lps[j - 1]) : i++;
        }
    }
    return matches;
}

console.log(kmpSearch("AABAACAADAABAABA", "AABA")); // [0, 9, 12]
console.log(kmpSearch("ABCABCABC", "ABC"));         // [0, 3, 6]
console.log(kmpSearch("AAAAAA", "AA"));             // [0, 1, 2, 3, 4]
