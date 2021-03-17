const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 
    "A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "i",
    "I", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q",
    "R", "r", "S", "s", "T", "t", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V",
    "v", "W", "w", "X", "x", "Y", "y", "Z", "z"
]

exports.MergeSort = class {
    /**
     * 
     * @param {any[]} arr 
     * @returns {any[]}
     */
    static sort(arr = []) {
        if (!arr || arr.length <= 0) { throw new Error('Array must be greater than 1'); }

        const size = arr.length;
        if (size < 2) {
            return arr;
        }
        if (size === 2) {
            return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
        }

        // Split & Merge
        const mid = parseInt(size / 2, 10);
        return this.merge(this.sort(arr.slice(0, mid)), this.sort(arr.slice(mid)));
    }

    /**
     * 
     * @param {any[]} array1 
     * @param {any[]} array2 
     * @returns {any[]}
     */
    static merge(array1 = [], array2 = []) {
        const merged = [];
        let array1Index = 0;
        let array2Index = 0;

        while (array1Index < array1.length || array2Index < array2.length) {
            if (array1Index >= array1.length || array1[array1Index] > array2[array2Index]) {
                merged.push(array2[array2Index]);
                array2Index += 1;
            } else {
                merged.push(array1[array1Index]);
                array1Index += 1;
            }
        }
        return merged;
    }

    static getData() {
        return arr;
    }
}