const directory = ["Jonathan", "Brandon", "Shannon", "Janet", "James", "Kim", "Kenneth", "Tshepo", "Daniel"];
// const directory = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

/**
 * @returns {String[]}
 */
const getData = () => {
    return directory;
}

/**
 * 
 * @param {*} arr 
 * @param {*} element 
 * @param {*} offset 
 * @returns {number}
 */
const indexOfBinarySearch = (arr, element, offset = 0) => {
    // Split array in half
    const half = +(arr.length / 2);
    const current = arr[half];

    if (current === element) {
        return offset + half;
    } else if (element > current) {
        const right = arr.slice(half);
        return indexOfBinarySearch(right, element, offset + half);
    } else {
        const left = arr.slice(0, half);
        return indexOfBinarySearch(left, element, offset);
    }
}


/**
 * 
 * @param {*} arr 
 * @param {*} lhs 
 * @param {*} rhs 
 * @param {*} x 
 * @returns {number}
 */
const indexOfBinarySearchNew = (arr, lhs, rhs, x) => {
    if (rhs >= 1) {
        // Get middle index
        let mid = parseInt(lhs + (rhs - 1) / 2);

        // 1. If the element is present at middle
        if (arr[mid] === x) {
            return mid;
        }

        // 2. If element is smaller than mid, it will be in LHS subset
        if (arr[mid] > x) {
            return indexOfBinarySearchNew(arr, lhs, mid - 1, x);
        } 
        
        // 3. If element is greater than mid, it will be pressent in RHS subset
        return indexOfBinarySearchNew(arr, mid + 1, rhs, x);
    }

    // Code reached when element is not present in array
    return -1;
}


/**
 * 
 * @param {*} arr 
 * @param {*} value 
 * @returns {number}
 */
const BinarySearch = (arr, value) => {
    let lhs = 0;
    let rhs = arr.length - 1;
    let mid = Math.floor((lhs + rhs) / 2);

    while(arr[mid] !== value && lhs <= rhs) {
        if (value < arr[mid]) {
            rhs = mid - 1;
        } else {
            lhs = mid + 1;
        }

        mid = Math.floor((lhs + rhs) / 2);
    }

    return arr[mid] === value ? mid : -1;
}



exports.indexOfBinarySearchNew = indexOfBinarySearchNew;
exports.indexOfBinarySearch = indexOfBinarySearch;
exports.getData = getData;
exports.BinarySearch = BinarySearch;

// NOTE:
// The idea of a binary search is to use the information that
// the array is sorted and reduce the time complexity to O(log n)
// Basically ignore half of the elements just after one comparison

// NOTE:
// 1. Compare x with the middle element
// 2. If x matches with middle element, we return the middle index
// 3. Else if x is greater than the middle element, then x can only be in the RHS sub array after the middle element(recur rhs)
// 4. Else (x is smaller) recur for the LHS