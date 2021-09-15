/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number){
    while(number != 6174){
        const bigNumber = number.toString().split("").sort().reverse().join('');
        const smallNumber =  number.toString().split("").sort().join('');
        number = bigNumber - smallNumber
        if (number === 0||number<1000||number>9998)
            throw new Error('Условия функции не соблюдены');
    }
    return number;
}

module.exports.kaprekarConstant = kaprekarConstant;