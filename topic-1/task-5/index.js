/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
 function kaprekarConstant(number) {
    if (number < 1000 && number > 9999) 
        throw new Error('Число должно быть четырехзначым');
    else {
        while (number !== 6174) {
            let smallNumber = number.toString().split('').sort().join('');
            let bigNumber = number.toString().split('').sort().reverse().join('');
            if (bigNumber == smallNumber)
                    throw new Error();
            number = bigNumber - smallNumber;
        }
    }
    return number;
}

module.exports.kaprekarConstant = kaprekarConstant;