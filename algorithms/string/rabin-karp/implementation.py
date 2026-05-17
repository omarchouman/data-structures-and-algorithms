BASE = 256
MOD = 101


def rabin_karp(text, pattern):
    """Returns list of start indices where pattern occurs in text."""
    n, m = len(text), len(pattern)
    if m > n:
        return []

    h = pow(BASE, m - 1, MOD)  # BASE^(m-1) mod MOD
    pat_hash = 0
    win_hash = 0

    for i in range(m):
        pat_hash = (BASE * pat_hash + ord(pattern[i])) % MOD
        win_hash = (BASE * win_hash + ord(text[i])) % MOD

    matches = []
    for i in range(n - m + 1):
        if pat_hash == win_hash:
            if text[i:i + m] == pattern:   # verify to avoid false positives
                matches.append(i)
        if i < n - m:
            win_hash = (BASE * (win_hash - ord(text[i]) * h) + ord(text[i + m])) % MOD
            if win_hash < 0:
                win_hash += MOD

    return matches


if __name__ == "__main__":
    print(rabin_karp("ABCABCABC", "ABC"))         # [0, 3, 6]
    print(rabin_karp("AABAACAADAABAABA", "AABA")) # [0, 9, 12]
    print(rabin_karp("AAAAAA", "AA"))             # [0, 1, 2, 3, 4]
    print(rabin_karp("HELLO", "WORLD"))           # []
