const { Search } = require('../logic/search');

const arr = ['Janet', 'James', 'Shannon', 'Brandon'];

test('Test Find Method On Data Set - Success', () => {
    const output = Search.findMethod(arr, 'Shannon');
    expect(output).toBe('Shannon');
});

test('Test Find Method On Data Set - Failure', () => {
    const output = Search.findMethod(arr, 'Shannon');
    expect(output).not.toBe('Brandon');
});

test('Test Filter Method On Data Set - Success', () => {
    const output = Search.filterMethod(arr, 'Shannon');
    expect(output.toString()).toBe('Shannon');
});

test('Test Filter Method On Data Set - Failure', () => {
    const output = Search.filterMethod(arr, 'Shannon');
    expect(output.toString()).not.toBe('Brandon');
});

test('Test forEach Method On Data Set - Success', () => {
    const output = Search.forEachMethod(arr, 'Shannon');
    expect(output).toBe('Shannon');
});

test('Test for Method On Data Set - Failure', () => {
    const output = Search.forMethod(arr, 'Shannon');
    expect(output).not.toBe('Brandon');
});

test('Test for Method On Data Set - Success', () => {
    const output = Search.forMethod(arr, 'Shannon');
    expect(output).toBe('Shannon');
});

test('Test forEach Method On Data Set - Failure', () => {
    const output = Search.forEachMethod(arr, 'Shannon');
    expect(output).not.toBe('Brandon');
});

test('Test Find Method On Data Set - Throwable(null)', () => {
    expect(() => {
        Search.findMethod(null, null);
    }).toThrow('Array and Search Item Are Required');
});

test('Test Filter Method On Data Set - Throwable(null)', () => {
    expect(() => {
        Search.filterMethod(null, null);
    }).toThrow('Array and Search Item Are Required');
});

test('Test Find Method On Data Set - Throwable(undefined)', () => {
    expect(() => {
        Search.findMethod(undefined, undefined);
    }).toThrow('Array and Search Item Are Required');
});

test('Test Filter Method On Data Set - Throwable(undefined)', () => {
    expect(() => {
        Search.filterMethod(undefined, undefined);
    }).toThrow('Array and Search Item Are Required');
});

test('Test forEach Method On Data Set - Throwable(null)', () => {
    expect(() => {
        Search.forEachMethod(null, null);
    }).toThrow('Array and Search Item Are Required');
});

test('Test forEach Method On Data Set - Throwable(undefined)', () => {
    expect(() => {
        Search.forEachMethod(undefined, undefined);
    }).toThrow('Array and Search Item Are Required');
});

test('Test for Method On Data Set - Throwable(null)', () => {
    expect(() => {
        Search.forMethod(null, null);
    }).toThrow('Array and Search Item Are Required');
});

test('Test for Method On Data Set - Throwable(undefined)', () => {
    expect(() => {
        Search.forMethod(undefined, undefined);
    }).toThrow('Array and Search Item Are Required');
});