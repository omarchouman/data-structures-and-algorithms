function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const p = partition(arr, low, high);
        quickSort(arr, low, p - 1);
        quickSort(arr, p + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    // Median-of-three pivot
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] < arr[low]) [arr[low], arr[mid]] = [arr[mid], arr[low]];
    if (arr[high] < arr[low]) [arr[low], arr[high]] = [arr[high], arr[low]];
    if (arr[mid] < arr[high]) [arr[mid], arr[high]] = [arr[high], arr[mid]];
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

const data = [10, 7, 8, 9, 1, 5];
console.log("Before:", [...data]);
console.log("After: ", quickSort(data));  // [1, 5, 7, 8, 9, 10]
