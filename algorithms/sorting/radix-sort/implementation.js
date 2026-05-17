function countingSortByDigit(arr, exp) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0);

    for (const val of arr) count[Math.floor(val / exp) % 10]++;
    for (let i = 1; i < 10; i++) count[i] += count[i - 1];
    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[--count[digit]] = arr[i];
    }
    return output;
}

function radixSort(arr) {
    if (!arr.length) return arr;
    let a = [...arr];
    const maxVal = Math.max(...a);
    for (let exp = 1; Math.floor(maxVal / exp) > 0; exp *= 10) {
        a = countingSortByDigit(a, exp);
    }
    return a;
}

const data = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Before:", data);
console.log("After: ", radixSort(data));  // [2, 24, 45, 66, 75, 90, 170, 802]
