const { SumArray } = require('../logic/sums');

const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

test('Test Sum Array Method A - Success', () => {
    const output = SumArray.getSumA(arr);
    expect(output).toBe(55);
});

test('Test Sum Array Method B - Success', () => {
    const output = SumArray.getSumB(arr);
    expect(output).toBe(55);
});

test('Test Sum Array Method C - Success', () => {
    const output = SumArray.getSumC(arr);
    expect(output).toBe(55);
});


test("Test Sum Array Method A - Failure", () => {
    const output = SumArray.getSumA(arr);
    expect(output).not.toBe(54);
});

test('Test Sum Array Method B - Failure', () => {
    const output = SumArray.getSumB(arr);
    expect(output).not.toBe(54);
});

test('Test Sum Array Method C - Failure', () => {
    const output = SumArray.getSumC(arr);
    expect(output).not.toBe(54);
});

test('Test Sum Array Method A Length Of 1 - Success', () => {
    const arr = [10];
    const output = SumArray.getSumA(arr);
    expect(output).toBe(10);
});

test('Test Sum Array Method B Length Of 1 - Success', () => {
    const arr = [10];
    const output = SumArray.getSumB(arr);
    expect(output).toBe(10);
});

test('Test Sum Array Method C Length Of 1 - Success', () => {
    const arr = [10];
    const output = SumArray.getSumC(arr);
    expect(output).toBe(10);
});

test('Test Sum Array Method A No Items In Array(Error) - Throwable', () => {
    const arr = [];
    expect(() => {
        SumArray.getSumA(arr);
    }).toThrow('Array length must be greater than 0');
});

test('Test Sum Array Method B No Items In Array(Error) - Throwable', () => {
    const arr = [];
    expect(() => {
        SumArray.getSumB(arr);
    }).toThrow('Array length must be greater than 0');
});

test('Test Sum Array Method C No Items In Array(Error) - Throwable', () => {
    const arr = [];
    expect(() => {
        SumArray.getSumC(arr);
    }).toThrow('Array length must be greater than 0');
});