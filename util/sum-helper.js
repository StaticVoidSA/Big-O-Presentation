const { SumArray } = require('../logic/sums');
const { performance } = require('perf_hooks');
const fsObj = require('../util/filesystem');
const path = require('path');
const _path = path.join(path.dirname(process.mainModule.filename), 'data', 'sum.txt');

exports.sumA = (arr) => {
    const startTimeForEach = performance.now();
    const outputForEach = SumArray.getSumA(arr);
    const stopTimeForEach = performance.now();
    const timeA = (stopTimeForEach - startTimeForEach).toFixed(4);
    fsObj.writeData(`Sum A: ForEach Method - Time: ${timeA}`, `Total: ${outputForEach}`, _path);
    return { value: outputForEach, time: timeA, length: arr.length };
}

exports.sumB = (arr) => {
    const startTimeFilter = performance.now();
    const outputFilter = SumArray.getSumB(arr);
    const stopTimeFilter = performance.now();
    const timeB = (stopTimeFilter - startTimeFilter).toFixed(4);
    fsObj.writeData(`Sum B: Reduce Method - Time: ${timeB}`, `Total: ${outputFilter}`, _path);
    return { value: outputFilter, time: timeB, length: arr.length };
}

exports.sumC = (arr) => {
    const startTimeMap = performance.now();
    const outputMap = SumArray.getSumC(arr);
    const stopTimeMap = performance.now();
    const timeC = (stopTimeMap - startTimeMap).toFixed(4);
    fsObj.writeData(`Sum C: Iteration Method - Time: ${timeC}`, `Total: ${outputMap}`, _path);
    return { value: outputMap, time: timeC, length: arr.length };
}