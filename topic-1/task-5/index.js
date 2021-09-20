/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant (number) {
    if (number > 9999 || number < 1000 || areDigitsSame(number))
        throw new Error();

    let substNumbers;
    let finalNum = number;

    while (finalNum !== 6174) {
        substNumbers = getSubtractedNumbers(finalNum);
        finalNum = substNumbers[1] - substNumbers[0];
    }

    return finalNum;
}

function areDigitsSame (number) {
    let first = Math.floor(number / 1000);
    let second = Math.floor(number / 100) % 10;
    let third = Math.floor(number / 10) % 10;
    let fourth = number % 10;
    return first === second && second === third && third === fourth;
}

function getSubtractedNumbers (number) {
    let strNumber = number.toString().split("");

    let ascending = strNumber.sort();
    let firstNum = parseInt(ascending.join(""));

    let descending = ascending.reverse();
    let secondNum = parseInt(descending.join(""));

    return [firstNum, secondNum];
}

module.exports.kaprekarConstant = kaprekarConstant;