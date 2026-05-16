# Dynamic Array

A dynamic array is a resizable array that automatically doubles its capacity when full. This amortizes the cost of growth — while a single resize is O(n), the average insertion cost over many operations remains O(1).

## How It Works

1. Start with a fixed capacity (e.g. 1 or 2)
2. When `size == capacity`, allocate a new array of double the capacity and copy all elements
3. Insert the new element at `arr[size]` and increment `size`
4. Shrink capacity by half when `size < capacity / 4` (optional, prevents memory waste)

## Time Complexity

| Operation | Average | Worst Case |
|---|---|---|
| Access | O(1) | O(1) |
| Search | O(n) | O(n) |
| Append | O(1) amortized | O(n) on resize |
| Insert (middle) | O(n) | O(n) |
| Delete (end) | O(1) amortized | O(1) |
| Delete (middle) | O(n) | O(n) |

**Space:** O(n)

## Use Cases

| Use Case | Description |
|---|---|
| Dynamic Data Storage | When the number of elements is unknown upfront |
| Amortized Constant Append | Efficient growing lists without pre-allocating exact size |
| Flexible Memory Allocation | Adapts to actual data size at runtime |
| Backing Store for Lists | Foundation for Python `list`, Java `ArrayList`, JS `Array` |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
