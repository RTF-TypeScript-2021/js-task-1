/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number){
    if ((number < 999) || (number > 10000)){
        throw Error;
    }
    while(number != 6174){
        if (number.toString().split('').sort().reverse().join('') ==
        number.toString().split('').sort().join('')){
            throw Error;
        }
        number = number.toString().split('').sort().reverse().join('') - 
        number.toString().split('').sort().join('');
    }
    return number;
}

module.exports.kaprekarConstant = kaprekarConstant;