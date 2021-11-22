const createRandom = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

exports.create = (length, min, max) => {
    let output = [];

    function helper(length) {
        if (length === 0) return;
        output.push(createRandom(min, max));
        helper(length - 1);
    }
   
    helper(length);
    return Array.from(new Set(output));
}
