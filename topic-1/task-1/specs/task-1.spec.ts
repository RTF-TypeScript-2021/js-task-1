const { isTriangle } = require('../index');

test('Method works fine', () => {
    expect(isTriangle(1, 1, 1)).toEqual(true);
    expect(isTriangle(1, 1, 2)).toEqual(false);
    expect(isTriangle(1, 2, 2)).toEqual(true);
    expect(isTriangle(7, 2, 2)).toEqual(false)
});