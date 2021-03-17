const { MergeSort } = require('../logic/merge-sort');
const data = MergeSort.getData();

test('Test Merge Sort First Index Method - Success', () => {
    const output = MergeSort.sort(data);
    expect(output[0]).toBe(-10);
});

test('Test Merge Sort Last Index Method - Success', () => {
    const output = MergeSort.sort(data);
    expect(output[output.length - 1]).toBe("z");
});

test('Test Merge Sort First Index Method - Failure', () => {
    const output = MergeSort.sort(data);
    expect(output[0]).not.toBe(1);
});

test('Test Merge Sort Last Index Method - Failure', () => {
    const output = MergeSort.sort(data);
    expect(output[output.length - 1]).not.toBe(10);
});

test('Test Merge Sort 0 Index Method(Error) - Throwable', () => {
    const data = [];
    expect(() => {
        MergeSort.sort(data);
    }).toThrow('Array must be greater than 1');
});

test('Test Merge Sort No Array(Undefined) Method(Error) - Throwable', () => {
    const data = undefined;
    expect(() => {
        MergeSort.sort(data);
    }).toThrow('Array must be greater than 1');
});

test('Test Merge Sort No Array(Null) Method(Error) - Throwable', () => {
    const data = null;
    expect(() => {
        MergeSort.sort(data);
    }).toThrow('Array must be greater than 1');
});