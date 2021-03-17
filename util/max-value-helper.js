const { FindMax } = require('../logic/max-value');
const { performance } = require('perf_hooks');
const fsObj = require('../util/filesystem');
const path = require('path');
const _path = path.join(path.dirname(process.mainModule.filename), 'data', 'min-max.txt');

exports.getMaxForEach = (arr) => {
    const startTime = performance.now();
    const output = FindMax.find(arr);
    const stopTime = performance.now();
    const time = (stopTime - startTime).toFixed(4);
    fsObj.writeData(`Max Value - ForEach Method: Output Value - ${output}`, time, _path);
    return { value: output, time: time, length: arr.length };
}

exports.getMaxFilter = (arr) => {
    const startTime = performance.now();
    const output = FindMax.findMaxFilter(arr);
    const stopTime = performance.now();
    const time = (stopTime - startTime).toFixed(4);
    fsObj.writeData(`Max Value - Filter Method: Output Value - ${output}`, time, _path);
    return { value: output, time: time, length: arr.length };
}

exports.getMaxMap = (arr) => {
    const startTime = performance.now();
    const output = FindMax.findMaxMap(arr);
    const stopTime = performance.now();
    const time = (stopTime - startTime).toFixed(4);
    fsObj.writeData(`Max Value - Map Method: Output Value - ${output}`, time, _path);
    return { value: output, time: time, length: arr.length };
}
