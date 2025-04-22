const sum = require('./sum.js');

test('2 + 3 must be 4', () => {
    expect(sum(2, 3)).toBe(5);
});