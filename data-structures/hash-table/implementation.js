class HashTable {
    constructor(capacity = 16) {
        this._capacity = capacity;
        this._buckets = Array.from({ length: capacity }, () => []);
        this._size = 0;
    }

    _index(key) {
        let hash = 0;
        for (const ch of String(key)) hash = (hash * 31 + ch.charCodeAt(0)) % this._capacity;
        return hash;
    }

    put(key, value) {
        const bucket = this._buckets[this._index(key)];
        const existing = bucket.find(([k]) => k === key);
        if (existing) { existing[1] = value; return; }
        bucket.push([key, value]);
        this._size++;
    }

    get(key) {
        const pair = this._buckets[this._index(key)].find(([k]) => k === key);
        if (!pair) throw new Error(`KeyError: ${key}`);
        return pair[1];
    }

    delete(key) {
        const bucket = this._buckets[this._index(key)];
        const idx = bucket.findIndex(([k]) => k === key);
        if (idx === -1) throw new Error(`KeyError: ${key}`);
        bucket.splice(idx, 1);
        this._size--;
    }

    get size() { return this._size; }

    toString() {
        const pairs = this._buckets.flat().map(([k, v]) => `${k}: ${v}`);
        return "{ " + pairs.join(", ") + " }";
    }
}

const ht = new HashTable();
ht.put("name", "Alice");
ht.put("age", 30);
ht.put("city", "Paris");

console.log("Table:", ht.toString());
console.log("Get 'name':", ht.get("name"));   // Alice
ht.put("age", 31);
console.log("Updated age:", ht.get("age"));   // 31
ht.delete("city");
console.log("After deleting 'city':", ht.toString());
console.log("Size:", ht.size);                // 2
