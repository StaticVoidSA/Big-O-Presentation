exports.HasDuplicates = class {
    /**
     * 
     * Checks for duplicate values in arrays of any type
     * @param {any[]} arr 
     * @returns {boolean}
     */
    static check = (arr) => {
        if (!arr || arr.length <= 0) { throw new Error('Array must have atleast one value'); }
        if (arr === 1) { return false; }
        
        const duplicates = [];
        const length = arr.length;

        for (let outer = 0; outer < length; outer++) {
            for (let inner = 0; inner < length; inner++) {
                if (outer === inner) {
                    continue;
                }
                if (arr[outer] === arr[inner]) {
                    duplicates.push(arr[outer]);
                    return true;
                }
            }
        }
        return false;
    }
}