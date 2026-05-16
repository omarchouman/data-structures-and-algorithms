class Stack:
    def __init__(self):
        self._data = []

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            raise IndexError("Pop from empty stack")
        return self._data.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError("Peek at empty stack")
        return self._data[-1]

    def is_empty(self):
        return len(self._data) == 0

    def __len__(self):
        return len(self._data)

    def __repr__(self):
        return str(self._data) + " <- top"


def main():
    stack = Stack()
    stack.push(10)
    stack.push(20)
    stack.push(30)

    print("Stack:", stack)             # [10, 20, 30] <- top
    print("Peek:", stack.peek())       # 30
    print("Pop:", stack.pop())         # 30
    print("Stack after pop:", stack)   # [10, 20] <- top
    print("Size:", len(stack))         # 2

if __name__ == "__main__":
    main()
