/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number){
    while (number !== 6174) {
        let ascendingNumber = number.toString().split("").sort().join('');
        let descendingNumber = number.toString().split("").sort().reverse().join('');

        number = descendingNumber - ascendingNumber;

        if (number < 1000 || number === 0 || number > 10000) {
            throw new Error('Соблюдены не все условия');
        }
    }

    return number;
}

module.exports.kaprekarConstant = kaprekarConstant;
