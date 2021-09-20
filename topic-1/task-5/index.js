/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number){
    if (number < 1000 || number > 9999 ) {
        throw new Error()
    }
    else 
        while (number != 6174) {
            let first = number.toString().split('').sort().reverse().join('');
            let second = number.toString().split('').sort().join('');
                if (second === first) {
                throw new Error() 
                }
            number = first - second;
        }
return number;
}

module.exports.kaprekarConstant = kaprekarConstant;