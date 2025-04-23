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

// Floating
test('Adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    
    //expect(value).toBe(0.3); // it won't work
    expect(value).toBeCloseTo(0.3);
});

// Strings
test('Here is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

test('But there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/i);
});

// Arrays and iterables
test('The shopping list has a milk on it', () => {
    const shoppingLit = ['rice', 'beans', 'pasta', 'meat', 'milk', 'butter'];

    expect(shoppingLit).toContain('milk');
});