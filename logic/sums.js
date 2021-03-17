exports.SumArray = class {
    /**
     * 
     * Gathers total sum of all array items
     * @param {number[]} arr
     * @returns {number} 
     */
    static getSumA = (arr) => {
        if (arr.length <= 0 || !arr) { throw new Error('Array length must be greater than 0'); }
        if (arr.length === 1) { return arr[0]; }
        
        let output = 0;
        arr.forEach(item => {
            output += item;
        });
        return output;
    }

    /**
     * 
     * Gathers total sum of all array items
     * @param {number[]} arr 
     * @returns {number}
     */
    static getSumB = (arr) => {
        if (arr.length <= 0 || !arr) { throw new Error('Array length must be greater than 0'); }
        if (arr.length === 1) { return arr[0]; }

        let output = 0;
        return output = arr.reduce((a, b) => a + b);
    }

    /**
     * 
     * Gathers total sum of all array items
     * @param {number[]} arr 
     * @returns {number}
     */
    static getSumC = (arr) => {
        if (arr.length <= 0 || !arr) { throw new Error('Array length must be greater than 0'); }
        if (arr.length === 1) { return arr[0]; }

        let output = 0;
        for (let i = 0; i < arr.length; i++) {
            output += arr[i];
        }
        return output;
    }
}