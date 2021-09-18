/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number) {
    if (number < 1000 || number > 9999) {
        throw new Error('bad number');
    }
    while (number !== 6174) {
        let increase = number.toString().split("").sort().join("");
        let decrease = number.toString().split("").sort().reverse().join("");
        if (increase === decrease) {
            throw new Error();
        }
        number = decrease - increase;
    }
    return number;
}

module.exports.kaprekarConstant = kaprekarConstant;