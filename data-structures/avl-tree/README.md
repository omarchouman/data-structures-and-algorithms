# AVL Tree

An AVL tree is a self-balancing binary search tree. After every insert or delete it checks the **balance factor** of each node (left height − right height) and performs **rotations** to keep the tree height at O(log n), preventing the O(n) worst case of a plain BST.

## Balance Factor

```
balance_factor = height(left subtree) - height(right subtree)
```

A node is balanced if its balance factor is **−1, 0, or +1**. Any value outside this range triggers a rotation.

## Rotations

| Imbalance | Fix |
|---|---|
| Left-Left (LL) | Right rotation |
| Right-Right (RR) | Left rotation |
| Left-Right (LR) | Left rotation on child, then right rotation |
| Right-Left (RL) | Right rotation on child, then left rotation |

## Time Complexity

| Operation | Complexity |
|---|---|
| Search | O(log n) guaranteed |
| Insert | O(log n) guaranteed |
| Delete | O(log n) guaranteed |

**Space:** O(n)

## Use Cases

| Use Case | Description |
|---|---|
| Databases / Indexes | Guaranteed O(log n) lookups regardless of insertion order |
| Sorted Sets / Maps | Backing structure for ordered collections |
| Real-Time Systems | Predictable worst-case performance matters more than average |
| Computational Geometry | Range trees and interval trees build on balanced BSTs |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
