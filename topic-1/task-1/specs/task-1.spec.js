"use strict";
var isTriangle = require('../index').isTriangle;
test('Method works fine', function () {
    expect(isTriangle(1, 1, 1)).toEqual(true);
    expect(isTriangle(1, 1, 2)).toEqual(false);
    expect(isTriangle(1, 2, 2)).toEqual(true);
    expect(isTriangle(7, 2, 2)).toEqual(false);
});
//# sourceMappingURL=task-1.spec.js.map