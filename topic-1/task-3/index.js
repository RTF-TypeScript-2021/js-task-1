"use strict"

/**
 * @param {Number} n число
 * @returns {Number} Факториал исходного числа
 */

function factorial(n) {
    if (n >= 0 && Number.isInteger(n))
        return n === 0 ? 1 : n * factorial(n - 1);
    else
        throw new Error(`${n} is not possitive, integer or null number`);
}

module.exports.factorial = factorial;