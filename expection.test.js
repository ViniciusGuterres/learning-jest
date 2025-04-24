const throwAnException = require('./exception.js');

test('Testing throwing an exception', () => {
    expect(() => throwAnException()).toThrow();
    expect(() => throwAnException()).toThrow(Error);

    expect(() => throwAnException()).toThrow(/Exception/i);
});