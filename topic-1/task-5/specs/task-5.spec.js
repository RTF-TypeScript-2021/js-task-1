var kaprekarConstant = require('../index').kaprekarConstant;
test('Kaprekar implemented correctly', function () {
    expect(kaprekarConstant(4710)).toBe(6174);
});
test('On edge-data throws error', function () {
    expect(function () { kaprekarConstant(6666); }).toThrow();
    expect(function () { kaprekarConstant(12); }).toThrow();
    expect(function () { kaprekarConstant(999999); }).toThrow();
});
export {};
//# sourceMappingURL=task-5.spec.js.map