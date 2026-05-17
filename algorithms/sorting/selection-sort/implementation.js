function selectionSort(arr) {
    const a = [...arr];
    const n = a.length;
    for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[minIdx]) minIdx = j;
        }
        [a[i], a[minIdx]] = [a[minIdx], a[i]];
    }
    return a;
}

const data = [64, 25, 12, 22, 11];
console.log("Before:", data);
console.log("After: ", selectionSort(data));  // [11, 12, 22, 25, 64]
