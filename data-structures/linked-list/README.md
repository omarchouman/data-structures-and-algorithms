# Linked List

A linked list is a sequence of nodes where each node holds a value and a pointer to the next node. Unlike arrays, nodes are not stored contiguously — each is allocated independently and linked by reference.

A **doubly linked list** adds a pointer to the previous node, enabling O(1) deletion when you already hold the node.

## How It Works

- **Head** points to the first node; **tail** (optional) points to the last
- Traversal always starts from head and follows `next` pointers
- Insert at head/tail: O(1) — just update pointers
- Insert/delete in the middle: O(n) to find position, O(1) to re-link

## Node Structure

**Singly:**
```
[ value | next → ]
```

**Doubly:**
```
[ ← prev | value | next → ]
```

## Time Complexity

| Operation | Singly | Doubly |
|---|---|---|
| Access by index | O(n) | O(n) |
| Search | O(n) | O(n) |
| Insert at head/tail | O(1) | O(1) |
| Insert at position | O(n) | O(n) |
| Delete at head | O(1) | O(1) |
| Delete at tail | O(n) | O(1) |
| Delete by value | O(n) | O(n) |

**Space:** O(n)

## Use Cases

| Use Case | Description |
|---|---|
| Dynamic Memory Allocation | Size grows/shrinks without pre-allocation |
| Frequent Head Insertions | O(1) prepend, ideal for stacks and queues |
| LRU Cache | Doubly linked list + hash map = O(1) eviction |
| Implementation of Stacks & Queues | Natural backing structure for both |

![Singly Linked List](../../images/Single%20Linked%20List.png)

![Doubly Linked List](../../images/Double%20Linked%20List.png)

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
