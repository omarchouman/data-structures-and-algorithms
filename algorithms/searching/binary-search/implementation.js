function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        else if (target < arr[mid]) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}

const data = [1, 3, 5, 7, 9, 11, 13, 15];
console.log("Search 7:", binarySearch(data, 7));   // 3
console.log("Search 1:", binarySearch(data, 1));   // 0
console.log("Search 6:", binarySearch(data, 6));   // -1
