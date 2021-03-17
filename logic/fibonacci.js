/**
 * 
 * Exponential version of the fibonacci Sequence
 * Time Complexity:
 * T(n) = T(n - 1) + T(n - 2) + 3 for n < 0
 * @param {number} length 
 * @returns {number} 
 */
exports.exponential = (length) => {
    if (!length || length <= 0) { throw new Error('Length must be longer than 0'); }

    let a = 0;
    let b = 1;
    let c = 0;

    for (let i = 2; i < length; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

/**
 * 
 * Polynomial version of the Fibonacci sequence
 * Time Complexity:
 * T(n) = T(n - 1) + T(n - 2) for n < 0
 * @param {number} length 
 * @returns {number}
 */
exports.polynomial = (length) => {
    if (!length || length <= 0) { throw new Error('Length must be longer than 0'); }
    
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;

    for (let i = 2; i < length; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    } 
    return arr[arr.length - 1];
}