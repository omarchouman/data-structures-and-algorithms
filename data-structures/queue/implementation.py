from collections import deque

class Queue:
    def __init__(self):
        self._data = deque()

    def enqueue(self, value):
        self._data.append(value)

    def dequeue(self):
        if self.is_empty():
            raise IndexError("Dequeue from empty queue")
        return self._data.popleft()

    def peek(self):
        if self.is_empty():
            raise IndexError("Peek at empty queue")
        return self._data[0]

    def is_empty(self):
        return len(self._data) == 0

    def __len__(self):
        return len(self._data)

    def __repr__(self):
        return "front -> " + str(list(self._data)) + " <- rear"


def main():
    q = Queue()
    q.enqueue(10)
    q.enqueue(20)
    q.enqueue(30)

    print("Queue:", q)                  # front -> [10, 20, 30] <- rear
    print("Peek:", q.peek())            # 10
    print("Dequeue:", q.dequeue())      # 10
    print("Queue after dequeue:", q)    # front -> [20, 30] <- rear
    print("Size:", len(q))              # 2

if __name__ == "__main__":
    main()
