const { isUnionTypeNode, convertTypeAcquisitionFromJson } = require("typescript");

/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
 function kaprekarConstant(number){
    let splSrtNumber = number.toString().split("").sort();
    let isCorrect = false;

    for (let i = 1; i < splSrtNumber.length; i++){
        if(splSrtNumber[i] != splSrtNumber[i - 1]) isCorrect = true;
    }

    if (!isCorrect || splSrtNumber.length != 4) throw err;

    while (true){
        let descendingNumber = getDescendingNumber(splSrtNumber);
        let increasingNumber = getIncreasingNumber(splSrtNumber);
        if (descendingNumber - increasingNumber == number) return number;
        number = descendingNumber - increasingNumber;
        splSrtNumber = number.toString().split("").sort();
    }
}

function getDescendingNumber(number){
    let newNumber = 0;
    for (let i = number.length - 1; i >= 0; i--){
        newNumber += number[i];
    }
    return Number(newNumber);
}

function getIncreasingNumber(number){
    let newNumber = 0;
    for (let i = 0; i < number.length; i++){
        newNumber += number[i];
    }
    return Number(newNumber);
}

module.exports.kaprekarConstant = kaprekarConstant;