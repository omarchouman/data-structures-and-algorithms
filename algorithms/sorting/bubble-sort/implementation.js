function bubbleSort(arr) {
    const a = [...arr];
    const n = a.length;
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return a;
}

const data = [64, 34, 25, 12, 22, 11, 90];
console.log("Before:", data);
console.log("After: ", bubbleSort(data));  // [11, 12, 22, 25, 34, 64, 90]
