# Deque (Double-Ended Queue)

A deque (pronounced "deck") is a linear data structure that allows insertion and deletion at **both ends** — front and rear — in O(1). It generalises both the stack and the queue.

## How It Works

Four core operations:
- **Push Front** — add element to the front
- **Push Rear** — add element to the rear
- **Pop Front** — remove and return the front element
- **Pop Rear** — remove and return the rear element

Implemented internally as a doubly linked list or a circular buffer for O(1) at both ends.

## Time Complexity

| Operation | Complexity |
|---|---|
| Push Front / Rear | O(1) |
| Pop Front / Rear | O(1) |
| Peek Front / Rear | O(1) |
| Search | O(n) |

**Space:** O(n)

## Use Cases

| Use Case | Description |
|---|---|
| Sliding Window Maximum | Maintain a monotonic deque to find max/min in a window in O(n) |
| Palindrome Checking | Compare front and rear characters simultaneously |
| Undo / Redo History | Push actions to rear; undo pops rear, redo pops a second deque |
| Work Stealing Schedulers | Threads push/pop from their own rear; steal from others' front |

## Implementations

- [Python](implementation.py)
- [JavaScript](implementation.js)
- [Java](implementation.java)
