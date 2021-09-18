"use strict"
/**
 * 
 * @param {Array<number>} array Массив
 * @returns {Array<number>} Удвоенный массив
*/

function calculateDoubleArray(array) {
    let cleanArray = array.filter(num => num != 0);
    let zeroCount = array.filter(num => num == 0).length;
    return cleanArray.flatMap(num => zeroCount-- > 0 ? [num, num] : num);
}

module.exports.calculateDoubleArray = calculateDoubleArray;