const { calculateDoubleArray } = require('../index');

test('Method works fine', () => {
    expect(calculateDoubleArray([1, 2, 3, 4, 5, 0, 0, 0, 0, 0])).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    expect(calculateDoubleArray([0, 0, 0, 0, 0])).toEqual([]);
    expect(calculateDoubleArray([1, 0])).toEqual([1, 1]);
    expect(calculateDoubleArray([1, 1, 5, 10, 0, 1, 2])).toEqual([1, 1, 1, 1, 5, 5, 10, 10, 1, 1, 2, 2]);
});
