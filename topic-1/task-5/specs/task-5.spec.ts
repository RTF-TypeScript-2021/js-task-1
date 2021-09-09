const {kaprekarConstant} = require('../index')


test('Kaprekar implemented correctly', () => {
    expect(kaprekarConstant(4710)).toBe(6174);
})

test('On edge-data throws error', () => {
    expect(kaprekarConstant(6666)).toThrowError();
    expect(kaprekarConstant(12)).toThrowError();
    expect(kaprekarConstant(999999)).toThrowError();
})

