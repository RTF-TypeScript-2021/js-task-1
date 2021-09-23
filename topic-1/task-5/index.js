/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
 function kaprekarConstant(number) {
    if(number < 1000 || number > 9999) {
        throw new Error('The number is not a four-digit number');
    };
    let digits = String(number).split('');
    if (digits.every(a => a === digits[0])) {
        throw new Error('All numbers are the same');
    };
    while (number !== 6174) {
        if (number < 1000) {
            number = parseInt(number.toString() + '0');
        };
        let smallNumber = number.toString().split('').sort((a, b) => a - b).join('');
        let bigNumber = number.toString().split('').sort((a, b) => b - a).join('');
        number = bigNumber - smallNumber;
    };
    
    return number;
}

module.exports.kaprekarConstant = kaprekarConstant;