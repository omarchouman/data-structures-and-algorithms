def build_lps(pattern):
    m = len(pattern)
    lps = [0] * m
    length = 0
    i = 1
    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        elif length:
            length = lps[length - 1]
        else:
            lps[i] = 0
            i += 1
    return lps


def kmp_search(text, pattern):
    """Returns list of start indices where pattern occurs in text."""
    n, m = len(text), len(pattern)
    if m == 0:
        return []

    lps = build_lps(pattern)
    matches = []
    i = j = 0

    while i < n:
        if text[i] == pattern[j]:
            i += 1
            j += 1
        if j == m:
            matches.append(i - j)
            j = lps[j - 1]
        elif i < n and text[i] != pattern[j]:
            if j:
                j = lps[j - 1]
            else:
                i += 1

    return matches


if __name__ == "__main__":
    text = "AABAACAADAABAABA"
    pattern = "AABA"
    print("Matches at:", kmp_search(text, pattern))  # [0, 9, 12]

    print("Matches at:", kmp_search("ABCABCABC", "ABC"))  # [0, 3, 6]
    print("Matches at:", kmp_search("AAAAAA", "AA"))      # [0, 1, 2, 3, 4]
