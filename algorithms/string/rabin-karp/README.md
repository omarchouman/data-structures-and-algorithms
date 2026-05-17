# Rabin-Karp

Find all occurrences of a **pattern** in a **text** using a **rolling hash**, avoiding character-by-character comparison for most windows.

**Example:** text = `"ABCABCABC"`, pattern = `"ABC"` → matches at indices **0, 3, 6**.

## How It Works

1. Compute the hash of the pattern and the hash of the first window of text.
2. Slide the window one character at a time, updating the hash in O(1) using the **rolling hash** formula:
   ```
   new_hash = (old_hash - text[i] * base^(m-1)) * base + text[i+m]
   ```
3. When hashes match, verify character by character to rule out **hash collisions**.

### Hash Formula
```
hash = (c₀ × base^(m-1) + c₁ × base^(m-2) + … + c_(m-1)) mod prime
```

## Time Complexity

| Case | Time | Space |
|---|---|---|
| Average | O(n + m) | O(1) |
| Worst (all collisions) | O(nm) | O(1) |

In practice the worst case is extremely rare with a large prime modulus.

## KMP vs Rabin-Karp

| | KMP | Rabin-Karp |
|---|---|---|
| Worst case | O(n + m) | O(nm) |
| Multiple patterns | Hard | Easy — hash each pattern |
| Extra space | O(m) for LPS | O(1) |
| Best for | Single pattern | Multi-pattern search |

## Use Cases

| Use Case | Description |
|---|---|
| Plagiarism detection | Search for many known phrases simultaneously |
| 2-D pattern matching | Extend rolling hash to matrix rows/columns |
| Substring search engines | Fast approximate duplicate detection |
| Bioinformatics | Multiple motif search in genome sequences |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
