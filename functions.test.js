const { add } = require('./functions.js');

test('Adds 2 + 2 equal 4', () => {
    expect(add(2, 2)).toBe(4);
});

test('Add 2 + 2 NOT equal 5', () => {
    expect(add(2, 2)).not.toBe(5);
});