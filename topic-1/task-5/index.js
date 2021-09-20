/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number){
    if (number<1000 || number>9999) {
        throw new Error();
    }
    if (new Set(number.toString().split('')).size<2) {
        throw new Error();
    }
    while (true) {
        let first = number.toString().split('').sort((a,b)=> b - a).join('');
        let second = number.toString().split('').sort((a,b)=>a-b).join('');
        number=first-second;
        if (number===6174) {
            break
        }
    }
    return number;
}

module.exports.kaprekarConstant = kaprekarConstant;