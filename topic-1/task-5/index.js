/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */

function kaprekarConstant(number) {
    if (number < 1000)
        throw new SyntaxError("число должно быть четерыхзначным");

    while (number !== 6174) {
        let array = [];

        while (number > 0) {
            array.push(number % 10);
            number = Math.floor(number / 10);
        }

        let big = parseInt(array.sort((a, b) => b - a).join(""));
        let small = parseInt(array.sort().join(""));

        number = big - small;

        if (number === 0)
            throw new SyntaxError("число не может состоять из одинаковых символов");
    }

    return number;
}

module.exports.kaprekarConstant = kaprekarConstant;