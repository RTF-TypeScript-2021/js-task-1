"use strict"

/**
 * @param {Number} n число
 * @returns {Number} Факториал исходного числа
*/

let factorial = n => n >= 0 
    ? (n == 0 ? 1 : n * factorial(n - 1))
    : new Error(`${n} is not possitive or null number`);

module.exports.factorial = factorial;