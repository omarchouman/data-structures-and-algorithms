# KMP Pattern Matching

Find all occurrences of a **pattern** string inside a **text** string in O(n + m) time, where n = len(text) and m = len(pattern).

**Example:** text = `"AABAACAADAABAABA"`, pattern = `"AABA"` → matches at indices **0, 9, 12**.

## How It Works

### 1. Build the Failure Function (LPS array)
`lps[i]` = length of the longest proper prefix of `pattern[0..i]` that is also a suffix.

```
pattern:  A  A  B  A
lps:      0  1  0  1
```

### 2. Search
Use `lps` to skip characters in the pattern that have already been matched, so we never move the text pointer backwards.

```
When mismatch at pattern[j]:
  if j > 0 → j = lps[j - 1]   (don't advance text pointer)
  else      → advance text pointer
```

## Time Complexity

| Phase | Time | Space |
|---|---|---|
| Build LPS | O(m) | O(m) |
| Search | O(n) | O(1) |
| **Total** | **O(n + m)** | **O(m)** |

## Use Cases

| Use Case | Description |
|---|---|
| Text editors | Find-and-replace, substring highlighting |
| DNA sequencing | Locate gene patterns in genome strings |
| Intrusion detection | Scan network packets for attack signatures |
| Plagiarism detection | Find exact phrase matches across documents |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
