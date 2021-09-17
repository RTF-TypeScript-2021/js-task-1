/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */

function kaprekarConstant(number){
    if (number < 1000 || number > 9999)
    {
        throw new Error('');
    }
    if (number == 6174)
    {
        return number;
    }
    else 
    {
        let max = number.toString().split('').sort().reverse().join('');
        let min = number.toString().split('').sort().join('');
        return kaprekarConstant(max-min);
    }
}

module.exports.kaprekarConstant = kaprekarConstant;