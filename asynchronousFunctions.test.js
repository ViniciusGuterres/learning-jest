const { fetchUser } = require('./functions.js');
const { fetchUserById } = require('./functions.js');

// Promises
test('The user name is Leanne Graham', () => {
    return fetchUser()
        .then(data => {
            expect(data.name).toBe('Leanne Graham');
        })
});

// Async / await
test('The user name is Leanne Graham', async () => {
    const { name } = await fetchUserById(1);

    expect(name).toBeDefined();
    expect(name).toBe('Leanne Graham');
});

