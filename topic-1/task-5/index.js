"use strict"

/**
 * @param {Number} number Initial number
 * @returns {Number} Kaprekar's constant based on initial number
 */

function kaprekarConstant(number) {
    let result = number;
    let ascend;
    let descend;
    
    if (number.toString().length != 4)
        throw new Error(
            "Non four-digit numbers can't be used to calculate the Kaprekar's constant");
    
    while (result !== 6174) {
        ascend = Array.from(String(result)).sort().join("");
        descend = Array.from(ascend).reverse().join("");
        if (ascend === descend)
            throw new Error("Repdigits catched");
        result = Math.abs(parseInt(ascend) - parseInt(descend));
    }

   return result;
}

module.exports.kaprekarConstant = kaprekarConstant;