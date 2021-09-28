/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */

function kaprekarConstant(number) {
    if (!Number.isInteger(number)) {
        throw new Error('Неверный тип введомых данных.');
    }
    
    let splSrtNumber = number.toString().split("").sort();

    if (splSrtNumber.length != 4) {
        throw new Error("Неверный ввод. Число должно быть от 1000 до 9999.");
    }

    for (let i = 1; i < splSrtNumber.length; i++) {
        if(splSrtNumber[i] != splSrtNumber[i - 1]) {
        }
    }

    while (true) {
        let descendingNumber = getDescendingNumber(splSrtNumber);
        let increasingNumber = getIncreasingNumber(splSrtNumber);
        let descendMinusIncreasing = descendingNumber - increasingNumber
        if (descendMinusIncreasing == number) {
            return number;
        }
        number = descendMinusIncreasing;
        splSrtNumber = number.toString().split("").sort();
    }
}

function getDescendingNumber(number) {
    let newNumber = 0;
    for (let i = number.length - 1; i >= 0; i--) {
        newNumber += number[i];
    }
    return Number(newNumber);
}

function getIncreasingNumber(number) {
    let newNumber = 0;
    for (let i = 0; i < number.length; i++) {
        newNumber += number[i];
    }
    return Number(newNumber);
}

module.exports.kaprekarConstant = kaprekarConstant;
