exports.PolynomialTime = class {
    /**
     * 
     * @param {number} length 
     * @returns {x, y, z}
     */
    static findXYZ = (length) => {
        if (!length || length <= 0) { throw new Error('Length must be greater than 1'); }

        const solutions = [];
        for (let x = 0; x < length; x++) {
            for (let y = 0; y < length; y++) {
                for (let z = 0; z < length; z++) {
                    if (3*x + 9*y + 8*z === 79) {
                        solutions.push({x, y, z});
                    }
                }
            }
        }
        return solutions;
    }
}