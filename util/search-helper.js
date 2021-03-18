const { Search } = require('../logic/search');
const { performance } = require('perf_hooks');
const fsObj = require('../util/filesystem');
const path = require('path');
const _path = path.join(path.dirname(process.mainModule.filename), 'data', 'find.txt');

exports.findMethod = (arr, input) => {
    const findStartTime = performance.now();
    const outputFind = Search.findMethod(arr, input);
    const findStopTime = performance.now();

    const output = {
        time: (findStopTime - findStartTime).toFixed(4),
        output: outputFind,
        type: "Find Method",
        length: arr.length
    }

    fsObj.writeData(`Method Find;Length: ${output.length};Output: ${output.output}`, output.findTime, _path);
    return output;
}

exports.filterMethod = (arr, input) => {
    const filterStartTime = performance.now();
    const outputFilter = Search.findMethod(arr, input);
    const filterStopTime = performance.now();

    const output = {
        time: (filterStopTime - filterStartTime).toFixed(4),
        output: outputFilter,
        type: "Filter Method",
        length: arr.length
    }

    fsObj.writeData(`Method Filter;Length: ${output.length};Output: ${output.output}`, output.filterTime, _path);
    return output;
}

exports.forEachMethod = (arr, input) => {
    const forEachStartTime = performance.now();
    const outputForEach = Search.forEachMethod(arr, input);
    const forEachStopTime = performance.now();

    const output = {
        time: (forEachStopTime - forEachStartTime).toFixed(4),
        output: outputForEach,
        type: "ForEach Method",
        length: arr.length
    }

    fsObj.writeData(`Method ForEach;Length: ${output.length};Output: ${output.output}`, output.forEachTime, _path);
    return output;
}

exports.forMethod = (arr, input) => {
    const forStartTime = performance.now();
    const outputFor = Search.forMethod(arr, input);
    const forStopTime = performance.now();

    const output = {
        time: (forStopTime - forStartTime).toFixed(4),
        output: outputFor,
        type: "For Method",
        length: arr.length
    }

    fsObj.writeData(`Method For;Length: ${output.length};Output: ${output.output}`, output.forTime, _path);
    return output;
}