const isAnagram = require('./anagram.js');

test('isAnagram functions exists', () => {
    expect(typeof isAnagram).toBe('function');
});

test('"cinema is an anagram of "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory is an anagram of "dirty room##"', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"hello is an anagram of "aloha"', () => {
    expect(isAnagram('hello', 'aloha')).toBeFalsy();
});
