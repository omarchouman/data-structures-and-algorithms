function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

const data = [4, 2, 7, 1, 9, 3];
console.log("Search 7:", linearSearch(data, 7));  // 2
console.log("Search 5:", linearSearch(data, 5));  // -1
