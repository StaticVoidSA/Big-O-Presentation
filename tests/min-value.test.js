const { FindMin } = require('../logic/min-value');

test('Test Find Min Value A - Success', () => {
    const arr = [90003, 8873, 2982, 128323, 23];
    const output = FindMin.find(arr);
    expect(output).toBe(23);
});

test('Test Find Min Value A String[] - Success', () => {
    const arr = ["Cat", "Bat", "Fat", "Sat"];
    const output = FindMin.find(arr);
    expect(output).toBe("Bat");
});

test('Test Find Min Value B - Success', () => {
    const arr = [8734, 23434, 665465, 34534, 234234, 12];
    const output = FindMin.find(arr);
    expect(output).toBe(12);
});

test('Test Find Min Value B String [] - Success', () => {
    const arr = ["Tall", "Paul", "Fall"];
    const output = FindMin.find(arr);
    expect(output).toBe("Fall");
});

test('Test Find Min Value Filter Method - Success', () => {
    const arr = [8734, 23434, 665465, 34534, 234234, 12];
    const output = FindMin.findMinFilter(arr);
    expect(output).toBe(12);
});

test('Test Find Min Value Filter Method String[] - Success', () => {
    const arr = ["Cat", "Bat", "Fat", "Sat"];
    const output = FindMin.findMinFilter(arr);
    expect(output).toBe("Bat");
});

test('Test Find Min Value Map Method - Success', () => {
    const arr = [8734, 23434, 665465, 34534, 234234, 12];
    const output = FindMin.findMinMap(arr);
    expect(output).toBe(12);
});

test('Test Find Min Value Map Method String[] - Success', () => {
    const arr = ["Cat", "Bat", "Fat", "Sat"];
    const output = FindMin.findMinMap(arr);
    expect(output).toBe("Bat");
});

test('Test Find Min Value A - Failure', () => {
    const arr = [32434, 54645, 67, 45645, 34, 23243];
    const output = FindMin.find(arr);
    expect(output).not.toBe(32);
});

test('Test Find Min Value B - Failure', () => {
    const arr = [2398, 23423, 56565, 334, 23, 4534, 1, 46456];
    const output = FindMin.find(arr);
    expect(output).not.toBe(2);
}); 

test('Test Find Min Value Filter Method - Failure', () => {
    const arr = [2398, 23423, 56565, 334, 23, 4534, 1, 46456];
    const output = FindMin.findMinFilter(arr);
    expect(output).not.toBe(2);
}); 

test('Test Find Min Value Filter Method - Failure', () => {
    const arr = [2398, 23423, 56565, 334, 23, 4534, 1, 46456];
    const output = FindMin.findMinMap(arr);
    expect(output).not.toBe(2);
}); 

test('Test Find Min Value 1 Item ForEach Method - Success', () => {
    const arr = [10];
    const output = FindMin.find(arr);
    expect(output).toBe(10);
});

test('Test Find Min Value 1 Item Filter Method - Success', () => {
    const arr = [10];
    const output = FindMin.findMinFilter(arr);
    expect(output).toBe(10);
});

test('Test Find Min Value 1 Item Map Method - Success', () => {
    const arr = [10];
    const output = FindMin.findMinMap(arr);
    expect(output).toBe(10);
});

test('Test Find Min Value 0 Item ForEach Method(Error) - Throwable', () => {
    expect(() => {
        const arr = [];
        FindMin.find(arr);
    }).toThrow('Array must have atleast two values');
});

test('Test Find Min Value 0 Item Filter Method(Error) - Throwable', () => {
    expect(() => {
        const arr = [];
        FindMin.findMinFilter(arr);
    }).toThrow('Array must have atleast two values');
});

test('Test Find Min Value 0 Item Map Method(Error) - Throwable', () => {
    expect(() => {
        const arr = [];
        FindMin.findMinMap(arr);
    }).toThrow('Array must have atleast two values');
});

test('Test Find Min Value undefined ForEach Method(Error) - Throwable', () => {
    expect(() => {
        const arr = undefined
        FindMin.find(arr);
    }).toThrow('Array must have atleast two values');
});

test('Test Find Min Value undefined Filter Method(Error) - Throwable', () => {
    expect(() => {
        const arr = undefined;
        FindMin.findMinFilter(arr);
    }).toThrow('Array must have atleast two values');
});

test('Test Find Min Value undefined Map Method(Error) - Throwable', () => {
    expect(() => {
        const arr = [];
        FindMin.findMinMap(arr);
    }).toThrow('Array must have atleast two values');
});

test('Test Find Min Value null ForEach Method(Error) - Throwable', () => {
    expect(() => {
        const arr = null
        FindMin.find(arr);
    }).toThrow('Array must have atleast two values');
});

test('Test Find Min Value null Filter Method(Error) - Throwable', () => {
    expect(() => {
        const arr = null;
        FindMin.findMinFilter(arr);
    }).toThrow('Array must have atleast two values');
});

test('Test Find Min Value null Map Method(Error) - Throwable', () => {
    expect(() => {
        const arr = null;
        FindMin.findMinMap(arr);
    }).toThrow('Array must have atleast two values');
});