# Hash Table

A hash table stores key-value pairs. A hash function maps each key to a bucket index in an underlying array, enabling near-constant-time lookups, insertions, and deletions.

## How It Works

1. Compute `index = hash(key) % capacity`
2. Store the value at `array[index]`
3. **Collision** — two keys hash to the same index. The most common resolution strategy is **chaining**: each bucket holds a linked list of all key-value pairs that map to it

## Time Complexity

| Operation | Average | Worst Case |
|---|---|---|
| Insert | O(1) | O(n) |
| Delete | O(1) | O(n) |
| Search | O(1) | O(n) |

Worst case occurs when all keys collide into the same bucket (degenerate chain). A good hash function keeps the average load factor low.

**Space:** O(n)

## Use Cases

| Use Case | Description |
|---|---|
| Fast Lookups | Dictionary / map operations in O(1) average time |
| Caching | Check cache hits in O(1) by hashing the request key |
| Frequency Counting | Count occurrences of elements in a stream |
| Symbol Tables | Compilers store variable names and their metadata |

![Hash Table](../../images/Hash%20Table.png)

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
