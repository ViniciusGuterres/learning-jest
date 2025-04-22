const reverseString = require("./reverseString");

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
})

test('Reverse "abc" to "cba"', () => {
    expect(reverseString('abc')).toBe('cba');
});

test('Reverse "hello" with uppercase', () => {
    expect(reverseString('Hello')).toBe('olleh');
});