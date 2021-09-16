/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function subtract(number)
{
    return number.toString().split('').sort().reverse().join('') - number.toString().split('').sort().join('');
}

function kaprekarConstant(number){
    if (number < 1000 || number > 9999)
        throw new Error('');
    if (number == 6174)
        return number;
    else 
        return(kaprekarConstant(subtract(number)))
}

module.exports.kaprekarConstant = kaprekarConstant;