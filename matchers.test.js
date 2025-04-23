// Truthiness
test('null', () => {
    const myVar = null;

    expect(myVar).toBeNull();
    expect(myVar).toBeDefined();
    expect(myVar).not.toBeUndefined();
    expect(myVar).not.toBeTruthy();
    expect(myVar).toBeFalsy();
});

test('zero', () => {
    const z = 0;

    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

// Numbers
test('2 + 2', () => {
    const value = 2 + 2;

    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);

    expect(value).toBe(4);
});