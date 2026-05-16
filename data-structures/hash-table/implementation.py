class HashTable:
    def __init__(self, capacity=16):
        self._capacity = capacity
        self._buckets = [[] for _ in range(capacity)]
        self._size = 0

    def _index(self, key):
        return hash(key) % self._capacity

    def put(self, key, value):
        bucket = self._buckets[self._index(key)]
        for i, (k, _) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value)
                return
        bucket.append((key, value))
        self._size += 1

    def get(self, key):
        for k, v in self._buckets[self._index(key)]:
            if k == key:
                return v
        raise KeyError(key)

    def delete(self, key):
        bucket = self._buckets[self._index(key)]
        for i, (k, _) in enumerate(bucket):
            if k == key:
                bucket.pop(i)
                self._size -= 1
                return
        raise KeyError(key)

    def __len__(self):
        return self._size

    def __repr__(self):
        pairs = []
        for bucket in self._buckets:
            pairs.extend(bucket)
        return "{" + ", ".join(f"{k}: {v}" for k, v in pairs) + "}"


def main():
    ht = HashTable()
    ht.put("name", "Alice")
    ht.put("age", 30)
    ht.put("city", "Paris")

    print("Table:", ht)
    print("Get 'name':", ht.get("name"))   # Alice
    ht.put("age", 31)                      # update
    print("Updated age:", ht.get("age"))   # 31
    ht.delete("city")
    print("After deleting 'city':", ht)
    print("Size:", len(ht))                # 2

if __name__ == "__main__":
    main()
