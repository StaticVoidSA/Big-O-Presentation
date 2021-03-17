const sort = require('../logic/sort');
const { performance } = require('perf_hooks');
const fsObj = require('../util/filesystem');
const path = require('path');
const _path = path.join(path.dirname(process.mainModule.filename), 'data', 'sort.txt');

const arr = [
    10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 
    "A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", 
    "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", 
    "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", 
    "w", "X", "x", "Y", "y", "Z", "z", "!", "@", "#", "$", "%", "^", "&", "*", 
    "(", ")", "-", "+", "'", "\\", "/", "}", "{", ",", ".", "<", ">", "|", "="];

exports.bubbleSort = (req, res) => {
    const startTime = performance.now();
    const output = sort.bubbleSort(arr, arr.length);
    const stopTime = performance.now();
    const time = (stopTime - startTime).toFixed(4);

    fsObj.writeData('Bubble Sort', time, _path);

    res.status(200).render('./sorting/sort', {
        pageTitle: 'Bubble Sort',
        length: arr.length,
        time: time,
        output: output,
        input: arr,
        path: '/sortBubble'
    });
}

exports.defaultSort = (req, res) => {
    const startTime = performance.now();
    const output = sort.defaultSort(arr, arr.length);
    const stopTime = performance.now();
    const time = (stopTime - startTime).toFixed(4);

    fsObj.writeData('Default Sort', (stopTime - startTime).toFixed(4), _path);

    res.status(200).render('./sorting/sort', {
        pageTitle: 'Default Sort',
        length: arr.length,
        time: time,
        output: Array.from(output),
        input: arr,
        path: '/sortDefault'
    });
}