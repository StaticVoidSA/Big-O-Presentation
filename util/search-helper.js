const { Search } = require('../logic/search');
const { performance } = require('perf_hooks');
const fsObj = require('../util/filesystem');
const path = require('path');
const _path = path.join(path.dirname(process.mainModule.filename), 'data', 'find.txt');

exports.findMethod = (arr) => {
    const findStartTime = performance.now();
    const outputFind = Search.findMethod(arr, 'Shannon');
    const findStopTime = performance.now();

    const output = {
        findTime: (findStopTime - findStartTime).toFixed(4),
        findOutput: outputFind,
        type: "Find Method"
    }

    fsObj.writeData(`Method Find;Length: ${arr.length};Output: ${output.findOutput}`, output.findTime, _path);
    return output;
}

exports.filterMethod = (arr, input) => {
    const filterStartTime = performance.now();
    const outputFilter = Search.findMethod(arr, input);
    const filterStopTime = performance.now();

    const output = {
        filterTime: (filterStopTime - filterStartTime).toFixed(4),
        filterOutput: outputFilter,
        type: "Filter Method"
    }

    fsObj.writeData(`Method Filter;Length: ${arr.length};Output: ${output.filterOutput}`, output.filterTime, _path);
    return output;
}

exports.forEachMethod = (arr) => {
    const forEachStartTime = performance.now();
    const outputForEach = Search.forEachMethod(arr, 'Shannon');
    const forEachStopTime = performance.now();

    const output = {
        forEachTime: (forEachStopTime - forEachStartTime).toFixed(4),
        forEachOutput: outputForEach,
        type: "ForEach Method"
    }

    fsObj.writeData(`Method ForEach;Length: ${arr.length};Output: ${output.forEachOutput}`, output.forEachTime, _path);
    return output;
}

exports.forMethod = (arr) => {
    const forStartTime = performance.now();
    const outputFor = Search.forMethod(arr, 'Shannon');
    const forStopTime = performance.now();

    const output = {
        forTime: (forStopTime - forStartTime).toFixed(4),
        forOutput: outputFor,
        type: "For Method"
    }

    fsObj.writeData(`Method For;Length: ${arr.length};Output: ${output.forOutput}`, output.forTime, _path);
    return output;
}