const { getData, indexOfBinarySearch, BinarySearch } = require('../logic/binary-search');
const sort = require('../logic/sort');
const createArray = require('../util/generate_array');
const directory = getData();
const length = directory.length;

test('Test First Index Of Binary Search - Success', () => {
    var input = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    var output = BinarySearch(sort.selectionSort(input), 5);
    expect(output).toBe(4);
});


test('Test First Index Of Binary Search - Success', () => {
    var input = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
    var output = BinarySearch(sort.selectionSort(input), 0);
    expect(output).toBe(10);
});

test('Test First Index Of Binary Search - Success', () => {
    var input = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
    var output = BinarySearch(sort.selectionSort(input), -10);
    expect(output).toBe(0);
});

test('Test First Index Of Binary Search - Success', () => {
    var input = sort.selectionSort(createArray.create(100, 1, 100));
    var expected = input.indexOf(12);    
    var output = BinarySearch(input, 12);
    expect(expected).toBe(output);
});

test('Test First Index Of Binary Search - Success', () => {
    var input = sort.selectionSort(createArray.create(100, 1, 100));
    var expected = input.indexOf(56);    
    var output = BinarySearch(input, 56);
    expect(expected).toBe(output);
});

test('Test First Index Of Binary Search - Success', () => {
    var input = sort.selectionSort(createArray.create(100, 1, 100));
    var expected = input.indexOf(89);    
    var output = BinarySearch(input, 89);
    expect(expected).toBe(output);
});

test('Test First Index Of Binary Search - Success', () => {
    var input = sort.selectionSort(createArray.create(1000, 1, 1000));
    var expected = input.indexOf(101);    
    var output = BinarySearch(input, 101);
    expect(expected).toBe(output);
});

test('Test First Index Of Binary Search - Success', () => {
    var input = sort.selectionSort(createArray.create(1000, 1, 1000));
    var expected = input.indexOf(445);    
    var output = BinarySearch(input, 445);
    expect(expected).toBe(output);
});

test('Test First Index Of Binary Search - Success', () => {
    var input = sort.selectionSort(createArray.create(1000, 1, 1000));
    var expected = input.indexOf(885);    
    var output = BinarySearch(input, 885);
    expect(expected).toBe(output);
});

test('Test First Index Of Binary Search - Success', () => {
    var input = sort.selectionSort(createArray.create(1000, 1, 1000));
    var expected = input.indexOf(100);    
    var output = BinarySearch(input, 1002);
    expect(expected).toBe(output);
});

test('Test First Index Of Binary Search - Success', () => {
    var input = sort.selectionSort(createArray.create(1000, 1, 1000));
    var expected = input.indexOf(500);    
    var output = BinarySearch(input, 500);
    expect(expected).toBe(output);
});