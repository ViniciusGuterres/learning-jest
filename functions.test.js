const { add, isNull, checkValue, createUser } = require('./functions.js');

test('Adds 2 + 2 equal 4', () => {
    expect(add(2, 2)).toBe(4);
});

test('Add 2 + 2 NOT equal 5', () => {
    expect(add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(checkValue(null)).toBeFalsy();
});

test('User should be Joe Doe object', () => {
    expect(createUser()).toEqual({ firstName: 'Joe', lastName: 'Doe' });
});

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;

    expect(load1 + load2).toBeLessThan(1600);
});

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;

    expect(load1 + load2).toBeLessThanOrEqual(1500);
});

test('There is no I in "team"', () => {
    expect('team').not.toMatch(/I/i);
});

test('Admin should be in usernames', () => {
    const usernames = ['joe', 'doe', 'admin'];

    expect(usernames).toContain('admin');
});