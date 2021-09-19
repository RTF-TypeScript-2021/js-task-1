"use strict";
var factorial = require('../index').factorial;
test('Method works fine', function () {
    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(function () { factorial(-6); }).toThrow(Error);
});
//# sourceMappingURL=task-3.spec.js.map