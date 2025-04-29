const { initDatabase, closeDatabase } = require ('./functions');

let databaseInitiated = false;

// One time setup
beforeAll(() => {
    initDatabase();
    databaseInitiated = true;
});

afterAll(() => {
    closeDatabase();
    databaseInitiated = false;
});

// Setup each time
// beforeEach(() => {
//     initDatabase();
//     databaseInitiated = true;
// });

// afterEach(() => {
//     closeDatabase();    
//     databaseInitiated = false;
// });

test('Database is initiated', () => {
    expect(databaseInitiated).toBe(true);
});

test('Database is initiated 2', () => {
    expect(databaseInitiated).toBe(true);
});