const { factorial } = require('../index');

test('Method works fine', () => {
    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(6)).toEqual(720);
    expect(factorial(12)).toEqual(479001600);
    expect(() => { factorial(-6); }).toThrow(Error)
    expect(() => { factorial(2.4); }).toThrow(Error)
});
