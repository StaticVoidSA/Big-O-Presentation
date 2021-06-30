exports.FindMin = class {
    /**
     * 
     * Finds minimum value in arrays of any type
     * @param {any[]} arr 
     * @returns {any}
     */
    static find = (arr) => {
        if (!arr || arr.length <= 0) { throw new Error('Array must have atleast two values'); }
        if (arr.length === 1) { return arr[0]; }

        let min = arr[0];
        arr.forEach(item => {
            item < min && (min = item);
        });
        return min;
    }

    /**
     * 
     * Finds minimum value in arrays of any type
     * @param {any[]} arr 
     * @returns {any}
     */
     static findMinFilter = (arr) => {
        if (!arr || arr.length <= 0) { throw new Error('Array must have atleast two values'); }
        if (arr.length === 1) { return arr[0]; }

        let min = arr[0];
        arr.filter(item => {
            item < min && (min = item);
        });
        return min;
    }

    /**
     * 
     * Finds minimum value in arrays of any type
     * @param {any[]} arr 
     * @returns {any}
     */
    static findMinMap = (arr) => {
        if (!arr || arr.length <= 0) { throw new Error('Array must have atleast two values'); }
        if (arr.length === 1) { return arr[0]; }
        
        let min = arr[0];
        arr.map(item => {
            item < min && (min = item);
        });
        return min;
    }
}
