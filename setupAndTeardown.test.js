const { initDatabase, closeDatabase } = require ('./functions');

let databaseInitiated = false;

beforeEach(() => {
    initDatabase();
    databaseInitiated = true;
});

afterEach(() => {
    closeDatabase();    
    databaseInitiated = false;
})

test('Database is initiated', () => {
    expect(databaseInitiated).toBe(true);
});

test('Database is initiated 2', () => {
    expect(databaseInitiated).toBe(true);
});