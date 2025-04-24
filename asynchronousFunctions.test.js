const { fetchUser } = require('./functions.js');

// Promises
test('The user name is Leanne Graham', () => {
    fetchUser()
        .then(data => {
            expect(data.name).toBe('Leanne Graham');
        })
});