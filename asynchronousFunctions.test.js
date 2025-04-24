const { fetchUser } = require('./functions.js');

// Promises
test('The user name is Leanne Graham', () => {
    return fetchUser()
        .then(data => {
            expect(data.name).toBe('Leanne Graham');
        })
});

// Async / await
test('The user name is Leanne Graham', async () => {
    const data = await fetchUser();
});