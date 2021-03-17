const { FindMax } = require('../logic/max-value');

test('Test Find Max Value ForEach Method - Success', () => {
    const arr = [90, 67, 34, 23, 889];
    const output = FindMax.find(arr);
    expect(output).toBe(889);
});

test('Test Find Max Value ForEach Method String[] - Success', () => {
    const arr = ["Bat", "Cat", "Fat", "Blat"];
    const output = FindMax.find(arr);
    expect(output).toBe("Fat");
});

test('Test Find Max Value Filter Method - Success', () => {
    const arr = [90, 67, 34, 23, 889];
    const output = FindMax.findMaxFilter(arr);
    expect(output).toBe(889);
});

test('Test Find Max Value Filter Method String[] - Success', () => {
    const arr = ["Bat", "Cat", "Fat", "Blat"];
    const output = FindMax.findMaxFilter(arr);
    expect(output).toBe("Fat");
});

test('Test Find Max Value Map Method - Success', () => {
    const arr = [90, 67, 34, 23, 889];
    const output = FindMax.findMaxMap(arr);
    expect(output).toBe(889);
});

test('Test Find Max Value Map Method String[] - Success', () => {
    const arr = ["Bat", "Cat", "Fat", "Blat"];
    const output = FindMax.findMaxMap(arr);
    expect(output).toBe("Fat");
});

test('Test Find Max Value ForEach Method - Success', () => {
    const arr = [894, 667, 3444, 654, 3454, 29992];
    const output = FindMax.find(arr);
    expect(output).toBe(29992);
});

test('Test Find Max Value Filter Method - Success', () => {
    const arr = [34, 454, 223, 67, 45, 3434];
    const output = FindMax.findMaxFilter(arr);
    expect(output).toBe(3434);
});

test('Test Find Max Value Map Method - Success', () => {
    const arr = [34, 454, 223, 67, 45, 3434];
    const output = FindMax.findMaxMap(arr);
    expect(output).toBe(3434);
});

test('Test Find Max Value ForEach Method - Failure', () => {
    const arr = [993, 343, 554, 3345, 12123];
    const output = FindMax.find(arr);
    expect(output).not.toBe(2324);
});

test('Test Find Max Value Filter Method - Failure', () => {
    const arr = [23423, 786, 56756, 4565, 34545, 6777, 56756];
    const output = FindMax.findMaxFilter(arr);
    expect(output).not.toBe(34);
});

test('Test Find Max Value Map Method - Failure', () => {
    const arr = [23423, 786, 56756, 4565, 34545, 6777, 56756];
    const output = FindMax.findMaxMap(arr);
    expect(output).not.toBe(34);
});

test('Test Find Max Value ForEach Method - Failure', () => {
    const arr = [47654, 345345, 23233, 434343];
    const output = FindMax.find(arr);
    expect(output).not.toBe(1);
});

test('Test Find Max Value Filter Method - Failure', () => {
    const arr = [47654, 345345, 23233, 434343];
    const output = FindMax.findMaxFilter(arr);
    expect(output).not.toBe(23233);
});

test('Test Find Max Value Map Method - Failure', () => {
    const arr = [47654, 345345, 23233, 434343];
    const output = FindMax.findMaxMap(arr);
    expect(output).not.toBe(23233);
});

test('Test Find Min Value 1 ForEach Method - Success', () => {
    const arr = [10];
    const output = FindMax.find(arr);
    expect(output).toBe(10);
});

test('Test Find Min Value 1 Filter Method - Success', () => {
    const arr = [10];
    const output = FindMax.findMaxFilter(arr);
    expect(output).toBe(10);
});

test('Test Find Max Value 1 Map Method - Success', () => {
    const arr = [10];
    const output = FindMax.findMaxMap(arr);
    expect(output).toBe(10);
});

test('Test Find Max Value 0 ForEach Method(Error) - Throwable', () => {
    expect(() => {
        const arr = [];
        FindMax.find(arr);
    }).toThrow('Array must have atleast two values');
});

test('Test Find Max Value 0 Filter Method(Error) - Throwable', () => {
    expect(() => {
        const arr = [];
        FindMax.findMaxFilter(arr);
    }).toThrow('Array must have atleast two values');
});

test('Test Find Max Value 0 Map Method(Error) - Throwable', () => {
    expect(() => {
        const arr = [];
        FindMax.findMaxMap(arr);
    }).toThrow('Array must have atleast two values');
});

test('Test Find Max Value undefined ForEach Method(Error) - Throwable', () => {
    expect(() => {
        const arr = undefined
        FindMax.find(arr);
    }).toThrow('Array must have atleast two values');
});

test('Test Find Max Value undefined Filter Method(Error) - Throwable', () => {
    expect(() => {
        const arr = undefined;
        FindMax.findMaxFilter(arr);
    }).toThrow('Array must have atleast two values');
});

test('Test Find Max Value undefined Map Method(Error) - Throwable', () => {
    expect(() => {
        const arr = undefined;
        FindMax.findMaxMap(arr);
    }).toThrow('Array must have atleast two values');
});

test('Test Find Max Value null ForEach Method(Error) - Throwable', () => {
    expect(() => {
        const arr = null
        FindMax.find(arr);
    }).toThrow('Array must have atleast two values');
});

test('Test Find Max Value null Filter Method(Error) - Throwable', () => {
    expect(() => {
        const arr = null;
        FindMax.findMaxFilter(arr);
    }).toThrow('Array must have atleast two values');
});

test('Test Find Max Value null Map Method(Error) - Throwable', () => {
    expect(() => {
        const arr = null;
        FindMax.findMaxMap(arr);
    }).toThrow('Array must have atleast two values');
});