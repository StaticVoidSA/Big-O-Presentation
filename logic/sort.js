/**
 * 
 * Sorts arrays of any type in an ascending order(Alternative Quadratic Sorting Method)
 * @param {any[]} arr 
 * @param {number} length 
 * @returns {any[]}
 */
exports.bubbleSort = (arr, length) => {
    if (!arr || length <= 0) { throw new Error('Array must have atleast two values'); }
    if (length === 1) { return arr[0]; }

    let temp;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

/**
 * 
 * Sorts arrays of any type in an ascending order
 * @param {any[]} arr 
 * @returns {any[]}
 */
exports.defaultSort = (arr) => {
    if (!arr || arr.length <= 0) { throw new Error('Array must have atleast two values'); }
    if (arr.length === 1) { return arr[0]; }

    arr.sort((a, b) => {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    });
    return arr;
}

/**
 * 
 * Sorts arrays of any type in an ascending order
 * @param {any[]} arr 
 * @param {number} length 
 * @returns {any[]}
 */
exports.quadraticSort = (arr, length) => {
    if (!arr || length <= 0) { throw new Error('Array must have atleast two values'); }
    if (length === 1) { return arr[0]; }

    for (let i = 0; i < length; i++) {
        let outer = arr[i]; // Executes (n) times
        for (let j = i + 1; j < length; j++) {
            let inner = arr[j]; // Executes (n) times
            if (outer > inner) {
                // Swap
                arr[i] = inner;
                arr[j] = outer;
                outer = arr[i];
                inner = arr[j];
            }
        }
    }
    return arr;
}