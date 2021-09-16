/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number){
    if (number > 9999 || number < 1000)
        throw new Error('Number has more or less than 4 digits');
    if (new Set(String(number).split('')).size < String(number).length)
        throw new Error('Number has the same digits');
    for (let i = 0; i < 7; i++) {
        number = getSortedDigits(number) - getSortedDigits(number, 'descending');
        number = Math.abs(number);
    }
    return number;
}

function getSortedDigits(number, sortType = 'ascending') {
    let result =  String(number)
        .split('')
        .sort();
    if (sortType == 'descending')
        result.reverse();
    return Number(result.join(''));
}


module.exports.kaprekarConstant = kaprekarConstant;