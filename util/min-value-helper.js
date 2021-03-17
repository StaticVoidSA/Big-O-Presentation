const { FindMin } = require('../logic/min-value');
const { performance } = require('perf_hooks');
const fsObj = require('../util/filesystem');
const path = require('path');
const _path = path.join(path.dirname(process.mainModule.filename), 'data', 'min-max.txt');

exports.getMinForEach = (arr) => {
    const startTime = performance.now();
    const output = FindMin.find(arr);
    const stopTime = performance.now();
    const time = (stopTime - startTime).toFixed(4);
    fsObj.writeData(`Min Value - ForEach Method: Output Value - ${output}`, time, _path);
    return { value: output, time: time, length: arr.length };
}

exports.getMinFilter = (arr) => {
    const startTime = performance.now();
    const output = FindMin.findMinFilter(arr);
    const stopTime = performance.now();
    const time = (stopTime - startTime).toFixed(4);
    fsObj.writeData(`Min Value - Filter Method: Output Value - ${output}`, time, _path);
    return { value: output, time: time, length: arr.length };
}

exports.getMinMap = (arr) => {
    const startTime = performance.now();
    const output = FindMin.findMinMap(arr);
    const stopTime = performance.now();
    const time = (stopTime - startTime).toFixed(4);
    fsObj.writeData(`Min Value - Map Method: Output Value - ${output}`, time, _path);
    return { value: output, time: time, length: arr.length };
}