class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        self._size = 0

    def prepend(self, value):
        node = Node(value)
        node.next = self.head
        self.head = node
        self._size += 1

    def append(self, value):
        node = Node(value)
        if not self.head:
            self.head = node
        else:
            cur = self.head
            while cur.next:
                cur = cur.next
            cur.next = node
        self._size += 1

    def delete(self, value):
        if not self.head:
            return
        if self.head.value == value:
            self.head = self.head.next
            self._size -= 1
            return
        cur = self.head
        while cur.next and cur.next.value != value:
            cur = cur.next
        if cur.next:
            cur.next = cur.next.next
            self._size -= 1

    def search(self, value):
        cur = self.head
        index = 0
        while cur:
            if cur.value == value:
                return index
            cur = cur.next
            index += 1
        return -1

    def __len__(self):
        return self._size

    def __repr__(self):
        values = []
        cur = self.head
        while cur:
            values.append(str(cur.value))
            cur = cur.next
        return " -> ".join(values)


def main():
    ll = LinkedList()
    ll.append(10)
    ll.append(20)
    ll.append(30)
    ll.prepend(5)

    print("List:", ll)                   # 5 -> 10 -> 20 -> 30
    print("Search 20:", ll.search(20))   # 2
    ll.delete(10)
    print("After deleting 10:", ll)      # 5 -> 20 -> 30
    print("Length:", len(ll))            # 3

if __name__ == "__main__":
    main()
