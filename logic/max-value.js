exports.FindMax = class {
    /**
     * 
     * Finds maximum value in arrays of any type
     * @param {any []} arr 
     * @return {number}
     */
    static find = (arr) => {
        if (!arr || arr.length <= 0) { throw new Error('Array must have atleast two values'); }
        if (arr.length === 1) { return arr[0]; }

        let max = arr[0];
        arr.forEach(item => {
            max < item && (max = item);
        });
        return max;
    }

    /**
     * 
     * Finds maximum value in arrays of any type
     * @param {any []} arr 
     * @returns {number}
     */
    static findMaxFilter = (arr) => {
        if (!arr || arr.length <= 0) { throw new Error('Array must have atleast two values'); }
        if (arr.length === 1) { return arr[0]; }

        let max = arr[arr.length - 1];
        arr.filter(item => {
            max < item && (max = item);
        });
        return max;
    }

    /**
     * 
     * Finds maximum value in arrays of any type
     * @param {any []} arr
     * @returns {number} 
     */
    static findMaxMap = (arr) => {
        if (!arr || arr.length <= 0) { throw new Error('Array must have atleast two values'); }
        if (arr.length === 1) { return arr[0]; }

        let max = arr[arr.length - 1];
        arr.map(item => {
            max < item && (max = item);
        });
        return max;
    }
}