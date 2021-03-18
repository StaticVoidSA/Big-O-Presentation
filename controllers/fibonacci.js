const fib = require('../logic/fibonacci');
const { performance } = require('perf_hooks');
const fsObj = require('../util/filesystem');
const path = require('path');
const _path = path.join(path.dirname(process.mainModule.filename), 'data', 'fibonacci.txt');

exports.getExponential = (req, res) => {
    res.status(200).render('./fibonacci/fib', {
        pageTitle: 'Fibonacci Exponential',
        path: '/exponential',
        statusCode: 200,
        method: req.method
    });
}

exports.postExponential = (req, res) => {
    const length = req.body.length;

    try {
        if (!length || isNaN(length) || length <= 0) {
            res.status(400).send('Bad Request');
        }
    
        const startTime = performance.now();
        const result = fib.exponential(length);
        const stopTime = performance.now();
        
        const output = { result: result, length: length, time: (stopTime - startTime).toFixed(4) };
    
        fsObj.writeData(`Fibonacci Exponential - Length: ${length}`, output.time, _path);
    
        res.status(200).render('./fibonacci/fib', {
            pageTitle: 'Fibonacci Exponential',
            path: '/exponential',
            statusCode: 200,
            output: output,
            method: req.method,
            time: output.time
        });
    } catch (error) {
        console.log(error);
    }
}

exports.getPolynomial = (req, res) => {
    res.status(200).render('./fibonacci/fib', {
        pageTitle: 'Fibonacci Polynomial',
        path: '/polynomial',
        statusCode: 200,
        method: req.method
    });
}

exports.postPolynomial = (req, res) => {
    const length = req.body.length;
    
    try {
        if (!length || isNaN(length) || length <= 0) {
            res.status(400).send('Bad Request');
        }
    
        const startTime = performance.now();
        const result = fib.polynomial(length);
        const stopTime = performance.now();
        
        const output = { result: result, length: length, time: (stopTime - startTime).toFixed(4) };
    
        fsObj.writeData(`Fibonacci Polynomial - Length: ${length}`, output.time, _path);
    
        res.status(200).render('./fibonacci/fib', {
            pageTitle: 'Fibonacci Polynomial',
            path: '/polynomial',
            statusCode: 200,
            output: output,
            method: req.method,
            time: output.time
        });
    } catch (error) {
        console.log(error);
    }
}