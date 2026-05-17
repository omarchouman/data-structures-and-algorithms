function insertionSort(arr) {
    const a = [...arr];
    for (let i = 1; i < a.length; i++) {
        const key = a[i];
        let j = i - 1;
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }
    return a;
}

const data = [12, 11, 13, 5, 6];
console.log("Before:", data);
console.log("After: ", insertionSort(data));  // [5, 6, 11, 12, 13]
