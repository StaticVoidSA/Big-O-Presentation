exports.Search = class {
    /**
     * 
     * @param {*} name 
     * @returns {string}
     */
    static findMethod = (arr, name) => {
        if (!arr || !name) { throw new Error('Array and Search Item Are Required'); }

        const item = arr.find(item => item === name);
        return item;
    }

    /**
     * 
     * @param {*} name 
     * @returns {array}
     */
    static filterMethod = (arr, name) => {
        if (!arr || !name) { throw new Error('Array and Search Item Are Required'); }

        const item = arr.filter(item => item === name);
        return item;
    }

    /**
     * 
     * @param {*} arr 
     * @param {*} _name 
     * @returns {string}
     */
    static forEachMethod = (arr, _name) => {
        if (!arr || !_name) { throw new Error('Array and Search Item Are Required'); }
        let output = '';
        arr.forEach(name => {
            if (name === _name) {
                output = name;
            }
        });
        return output;
    }

    /**
     * 
     * @param {*} arr 
     * @param {*} _name 
     * @returns {string}
     */
    static forMethod = (arr, _name) => {
        if (!arr || !_name) { throw new Error('Array and Search Item Are Required'); }
        let output = '';
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === _name) {
                output = arr[i];
            }
        }
        return output;
    }
}