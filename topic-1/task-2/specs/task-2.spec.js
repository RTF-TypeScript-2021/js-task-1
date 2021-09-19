"use strict";
var calculateDoubleArray = require('../index').calculateDoubleArray;
test('Method works fine', function () {
    expect(calculateDoubleArray([1, 2, 3, 4, 5, 0, 0, 0, 0, 0])).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    expect(calculateDoubleArray([0, 0, 0, 0, 0])).toEqual([]);
    expect(calculateDoubleArray([1, 0])).toEqual([1, 1]);
});
//# sourceMappingURL=task-2.spec.js.map