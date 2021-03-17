const { HasDuplicates } = require('../logic/has-duplicates');

test('Test Has Duplicates Method String Array - Success', () => {
    const arr = ['Book', 'Pen', 'Pencil', 'Book', 'Table'];
    const output = HasDuplicates.check(arr);
    expect(output).toBe(true);
});

test('Test Has Duplciates Method Integer Array - Success', () => {
    const arr = [78, 56, 34, 55, 34, 55, 67, 34, 45];
    const output = HasDuplicates.check(arr);
    expect(output).toBe(true);
});

test('Test Has Duplciates Method Char Array - Success', () => {
    const arr = ['A', 'B', 'C', 'C'];
    const output = HasDuplicates.check(arr);
    expect(output).toBe(true);
});

test('Test Has Duplicates Method String Array - Failure', () => {
    const arr = ['Book', 'Pen', 'Pencil', 'Book', 'Table'];
    const output = HasDuplicates.check(arr);
    expect(output).not.toBe(false);
});

test('Test Has Duplicates Method Integer Array - Failure', () => {
    const arr = [78, 56, 34, 55, 34, 55, 67, 34, 45];
    const output = HasDuplicates.check(arr);
    expect(output).not.toBe(false);
});

test('Test Has Duplicates 1 Item Method 1 Item - Success', () => {
    const arr = [9000];
    const output = HasDuplicates.check(arr);
    expect(output).toBe(false);
});

test('Test Has Duplicates 0 Items Method(Error) - Throwable', () => {
    expect(() => {
        const arr = [];
        HasDuplicates.check(arr);
    }).toThrow('Array must have atleast one value');
});