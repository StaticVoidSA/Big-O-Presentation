const sort = require('../logic/sort');

const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

test('Test First Index Of Bubble Sort Method - Success', () => {
    const output = sort.bubbleSort(arr, arr.length);
    expect(output[0]).toBe(0);
});

test('Test First Index Of Default Sort Method - Success', () => {
    const output = sort.defaultSort(arr);
    expect(output[0]).toBe(0);
});

test('Test First Index Of Quadratic/New Bubble Sort Method - Success', () => {
    const output = sort.quadraticSort(arr, arr.length);
    expect(output[0]).toBe(0);
});

test('Test First Index Of Selection Sort - Success', () => {
    const output = sort.selectionSort(arr);
    expect(output[0]).toBe(0);
});

test('Test First Index Of Insertion Sort - Success', () => {
    const output = sort.insertionSort(arr);
    expect(output[0]).toBe(0);
});

test('Test Last Index Of Bubble Sort Method - Success', () => {
    const output = sort.bubbleSort(arr, arr.length);
    expect(output[arr.length - 1]).toBe(10);
});

test('Test Last Index Of Default Sort Method - Success', () => {
    const output = sort.defaultSort(arr);
    expect(output[arr.length - 1]).toBe(10);
});

test('Test Last Index Of Quadratic/New Bubble Sort Method - Success', () => {
    const output = sort.quadraticSort(arr, arr.length);
    expect(output[arr.length - 1]).toBe(10);
});

test('Test Last Index Of Selection Sort - Success', () => {
    const output = sort.selectionSort(arr);
    expect(output[arr.length - 1]).toBe(10);
});

test('Test Last Index Of Insertion Sort - Success', () => {
    const output = sort.insertionSort(arr);
    expect(output[arr.length - 1]).toBe(10);
});

test('Test First Index Of Bubble Sort Method - Failure', () => {
    const output = sort.bubbleSort(arr, arr.length);
    expect(output[0]).not.toBe(1);
});

test('Test First Index Of Default Sort Method - Failure', () => {
    const output = sort.defaultSort(arr);
    expect(output[0]).not.toBe(1);
});

test('Test First Index Of Quadratic/New Bubble Sort Method - Failure', () => {
    const output = sort.quadraticSort(arr, arr.length);
    expect(output[0]).not.toBe(1);
});

test('Test First Index Of Selection Sort - Failure', () => {
    const output = sort.selectionSort(arr);
    expect(output[0]).not.toBe(1);
});

test('Test First Index Of Insertion Sort - Failure', () => {
    const output = sort.insertionSort(arr);
    expect(output[0]).not.toBe(1);
});

test('Test Last Index Of Bubble Sort Method - Failure', () => {
    const output = sort.bubbleSort(arr, arr.length);
    expect(output[arr.length - 1]).not.toBe(1);
});

test('Test Last Index Of Default Sort Method - Failure', () => {
    const output = sort.defaultSort(arr);
    expect(output[arr.length - 1]).not.toBe(1);
});

test('Test Last Index Of Default Sort Method - Failure', () => {
    const output = sort.quadraticSort(arr, arr.length);
    expect(output[arr.length - 1]).not.toBe(1);
});

test('Test Last Index Of Selection Sort - Failure', () => {
    const output = sort.selectionSort(arr);
    expect(output[arr.length - 1]).not.toBe(1);
});

test('Test Last Index Of Insertion Sort - Failure', () => {
    const output = sort.insertionSort(arr);
    expect(output[arr.length - 1]).not.toBe(1);
});

test('Test Array Length Of 1 Bubble Sort Method - Success', () => {
    const arr = [5];
    const output = sort.bubbleSort(arr, arr.length);
    expect(output).toBe(5);
});


test('Test Array Length Of 1 Default Bubble Sort Method - Success', () => {
    const arr = [3];
    const output = sort.defaultSort(arr);
    expect(output).toBe(3);
});

test('Test Array Length Of 1 QuadraticSort Method - Success', () => {
    const arr = [3];
    const output = sort.quadraticSort(arr);
    expect(output[0]).toBe(3);
});

test('Test Array Length Of 1 Selection Sort Method - Success', () => {
    const arr = [3];
    const output = sort.selectionSort(arr);
    expect(output[0]).toBe(3);
});

test('Test Array Length Of 1 Insertion Sort Method - Success', () => {
    const arr = [3];
    const output = sort.insertionSort(arr);
    expect(output[0]).toBe(3);
});

test('Test Array Length Of 0 Bubble Sort Method(Error) - Throwable', () => {
    expect(() => {
        const arr = [];
        sort.bubbleSort(arr, arr.length);
    }).toThrow('Array must have atleast two values');
});

test('Test Array Length Of 0 Default Sort Method(Error) - Throwable', () => {
    expect(() => {
        const arr = [];
        sort.defaultSort(arr, arr.length);
    }).toThrow('Array must have atleast two values');
});

test('Test Array Length Of 0 Quadratic Sort Method(Error) - Throwable', () => {
    expect(() => {
        const arr = [];
        sort.quadraticSort(arr, arr.length);
    }).toThrow('Array must have atleast two values');
});

test('Test Array Length Of 0 Selection Sort Method(Error) - Throwable', () => {
    expect(() => {
        const arr = [];
        sort.selectionSort(arr);
    }).toThrow('Array must have atleast two values');
});

test('Test Array Length Of 0 Insertion Sort Method(Error) - Throwable', () => {
    expect(() => {
        const arr = [];
        sort.insertionSort(arr);
    }).toThrow('Array must have atleast two values');
});