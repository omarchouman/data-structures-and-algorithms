class DynamicArray {
    constructor() {
        this._capacity = 2;
        this._data = new Array(this._capacity).fill(null);
        this._size = 0;
    }

    append(value) {
        if (this._size === this._capacity) this._resize(this._capacity * 2);
        this._data[this._size++] = value;
    }

    get(index) {
        if (index < 0 || index >= this._size) throw new RangeError("Index out of bounds");
        return this._data[index];
    }

    delete(index) {
        if (index < 0 || index >= this._size) throw new RangeError("Index out of bounds");
        for (let i = index; i < this._size - 1; i++) {
            this._data[i] = this._data[i + 1];
        }
        this._data[--this._size] = null;
        if (this._size > 0 && this._size === Math.floor(this._capacity / 4)) {
            this._resize(Math.floor(this._capacity / 2));
        }
    }

    _resize(newCapacity) {
        const newData = new Array(newCapacity).fill(null);
        for (let i = 0; i < this._size; i++) newData[i] = this._data[i];
        this._data = newData;
        this._capacity = newCapacity;
    }

    get length() { return this._size; }

    toArray() { return this._data.slice(0, this._size); }
}

const da = new DynamicArray();
[10, 20, 30, 40, 50].forEach(v => da.append(v));

console.log("Array:", da.toArray());             // [10, 20, 30, 40, 50]
console.log("Element at index 2:", da.get(2));   // 30
da.delete(1);
console.log("After deleting index 1:", da.toArray()); // [10, 30, 40, 50]
console.log("Length:", da.length);               // 4
