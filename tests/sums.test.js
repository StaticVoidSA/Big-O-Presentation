const { SumArray } = require('../logic/sums');
const createArray = require('../util/generate_array');

const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const input = createArray.create(2000, 1, 1500);

const expected = input.reduce((prev, current) => {
    return +prev + +current;
});

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

test('Test Sum Array Method D - Success', () => {
    const output = SumArray.getSumD(arr);
    expect(output).toBe(55);
});

test('Test Sum Array Method A - Large Array - Success', () => {
    const output = SumArray.getSumA(input);
    expect(expected).toBe(output);
});

test('Test Sum Array Method B - Large Array - Success', () => {
    const output = SumArray.getSumB(input);
    expect(expected).toBe(output);
});

test('Test Sum Array Method C - Large Array - Success', () => {
    const output = SumArray.getSumC(input);
    expect(expected).toBe(output);
});

test('Test Sum Array Method D - Large Array - Success', () => {
    const output = SumArray.getSumD(input);
    expect(expected).toBe(output);
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

test('Test Sum Array Method D - Failure', () => {
    const output = SumArray.getSumD(arr);
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

test('Test Sum Array Method D Length Of 1 - Success', () => {
    const arr = [10];
    const output = SumArray.getSumD(arr);
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

test('Test Sum Array Method D No Items In Array(Error) - Throwable', () => {
    const arr = [];
    expect(() => {
        SumArray.getSumD(arr);
    }).toThrow('Array length must be greater than 0');
});