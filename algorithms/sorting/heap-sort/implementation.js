function heapSort(arr) {
    const a = [...arr];
    const n = a.length;

    function heapify(size, i) {
        let largest = i;
        const left = 2 * i + 1, right = 2 * i + 2;
        if (left < size && a[left] > a[largest]) largest = left;
        if (right < size && a[right] > a[largest]) largest = right;
        if (largest !== i) {
            [a[i], a[largest]] = [a[largest], a[i]];
            heapify(size, largest);
        }
    }

    // Build max-heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(n, i);

    // Extract elements
    for (let i = n - 1; i > 0; i--) {
        [a[0], a[i]] = [a[i], a[0]];
        heapify(i, 0);
    }

    return a;
}

const data = [12, 11, 13, 5, 6, 7];
console.log("Before:", data);
console.log("After: ", heapSort(data));  // [5, 6, 7, 11, 12, 13]
