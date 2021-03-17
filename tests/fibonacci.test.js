const fib = require('../logic/fibonacci');

test('Test Fibonacci Exponential Low Number - Success', () => {
    const output = fib.exponential(4);
    expect(output).toBe(2);
});

test('Test Fibonacci Polynomial Low Number - Success', () => {
    const output = fib.polynomial(4);
    expect(output).toBe(2);
});

test('Test Fibonacci Exponential Mid Number - Success', () => {
    const output = fib.exponential(10);
    expect(output).toBe(34);
});

test('Test Fibonacci Polynomial Mid Number - Success', () => {
    const output = fib.polynomial(10);
    expect(output).toBe(34);
});

test('Test Fibonacci Exponential High Number - Success', () => {
    const output = fib.exponential(20);
    expect(output).toBe(4181);
});

test('Test Fibonacci Polynomial High Number - Success', () => {
    const output = fib.polynomial(20);
    expect(output).toBe(4181);
});

test('Test Fibonacci Exponential Higher Number - Success', () => {
    const output = fib.exponential(40);
    expect(output).toBe(63245986);
});

test('Test Fibonacci Polynomial Higher Number - Success', () => {
    const output = fib.polynomial(40);
    expect(output).toBe(63245986);
});

test('Test Fibonacci Exponential Low Number - Failure', () => {
    const output = fib.exponential(4);
    expect(output).not.toBe(1);
});

test('Test Fibonacci Polynomial Low Number - Failure', () => {
    const output = fib.polynomial(4);
    expect(output).not.toBe(1);
});

test('Test Fibonacci Exponential Mid Number - Failure', () => {
    const output = fib.exponential(10);
    expect(output).not.toBe(1);
});

test('Test Fibonacci Polynomial Mid Number - Failure', () => {
    const output = fib.polynomial(10);
    expect(output).not.toBe(1);
});

test('Test Fibonacci Exponential High Number - Failure', () => {
    const output = fib.exponential(20);
    expect(output).not.toBe(4180);
});

test('Test Fibonacci Polynomial Higher Number - Failure', () => {
    const output = fib.polynomial(20);
    expect(output).not.toBe(4180);
});

test('Test Fibonacci Exponential Higher Number - Failure', () => {
    const output = fib.exponential(40);
    expect(output).not.toBe(63245985);
});

test('Test Fibonacci Polynomial Higher Number - Failure', () => {
    const output = fib.polynomial(40);
    expect(output).not.toBe(63245985);
});

test('Test Fibonacci Exponential Length Of 0 Method(Error) - Throwable', () => {
    expect(() => {
        fib.exponential(0);
    }).toThrow('Length must be longer than 0');
});

test('Test Fibonacci Polynomial Length Of 0 Method(Error) - Throwable', () => {
    expect(() => {
        fib.polynomial(0);
    }).toThrow('Length must be longer than 0');
});

test('Test Fibonacci Exponential Length Of -1 Method(Error) - Throwable', () => {
    expect(() => {
        fib.exponential(-1);
    }).toThrow('Length must be longer than 0');
});

test('Test Fibonacci Polynomial Length Of -1 Method(Error) - Throwable', () => {
    expect(() => {
        fib.polynomial(-1);
    }).toThrow('Length must be longer than 0');
});