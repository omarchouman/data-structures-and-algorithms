from collections import deque

class Deque:
    def __init__(self):
        self._data = deque()

    def push_front(self, value):
        self._data.appendleft(value)

    def push_rear(self, value):
        self._data.append(value)

    def pop_front(self):
        if self.is_empty():
            raise IndexError("Pop from empty deque")
        return self._data.popleft()

    def pop_rear(self):
        if self.is_empty():
            raise IndexError("Pop from empty deque")
        return self._data.pop()

    def peek_front(self):
        if self.is_empty():
            raise IndexError("Peek at empty deque")
        return self._data[0]

    def peek_rear(self):
        if self.is_empty():
            raise IndexError("Peek at empty deque")
        return self._data[-1]

    def is_empty(self):
        return len(self._data) == 0

    def __len__(self):
        return len(self._data)

    def __repr__(self):
        return "front -> " + str(list(self._data)) + " <- rear"


def main():
    dq = Deque()
    dq.push_rear(10)
    dq.push_rear(20)
    dq.push_front(5)
    dq.push_front(1)

    print("Deque:", dq)                    # front -> [1, 5, 10, 20] <- rear
    print("Peek front:", dq.peek_front())  # 1
    print("Peek rear:", dq.peek_rear())    # 20
    print("Pop front:", dq.pop_front())    # 1
    print("Pop rear:", dq.pop_rear())      # 20
    print("Deque:", dq)                    # front -> [5, 10] <- rear


if __name__ == "__main__":
    main()
