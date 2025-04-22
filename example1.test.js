test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;

    expect(data).toEqual({ one: 1, two: 2 });
});

test('object assignment 2', () => {
    const data = { one: 1 };
    data['two'] = 2;
    data[3] = 3;

    expect(data).toEqual({ one: 1, two: 2, 3: 3 });
});