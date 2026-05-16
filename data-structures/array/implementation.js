class FixedArray {
    constructor(capacity) {
        this.capacity = capacity;
        this.data = new Array(capacity).fill(null);
        this.size = 0;
    }

    insert(value) {
        if (this.size >= this.capacity) throw new Error("Array is full");
        this.data[this.size++] = value;
    }

    access(index) {
        if (index < 0 || index >= this.size) throw new RangeError("Index out of bounds");
        return this.data[index];
    }

    // Returns index of value or -1 if not found
    search(value) {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === value) return i;
        }
        return -1;
    }

    delete(index) {
        if (index < 0 || index >= this.size) throw new RangeError("Index out of bounds");
        for (let i = index; i < this.size - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.data[--this.size] = null;
    }

    toArray() {
        return this.data.slice(0, this.size);
    }
}

const arr = new FixedArray(5);
arr.insert(10);
arr.insert(20);
arr.insert(30);
arr.insert(40);
arr.insert(50);

console.log("Array:", arr.toArray());          // [10, 20, 30, 40, 50]
console.log("Access index 2:", arr.access(2)); // 30
console.log("Search 40:", arr.search(40));     // 3
arr.delete(1);
console.log("After deleting index 1:", arr.toArray()); // [10, 30, 40, 50]
