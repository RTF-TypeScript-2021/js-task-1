/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
 function kaprekarConstant(number) {
    if (number >= 1000 && number <= 9999) {
        const setNumber = new Set(String(number).split(''));
        if (setNumber.size >= 2) {
            while (number != 6174) {
                let smallNumber = number.toString().split('').sort().join('');
                let bigNumber = number.toString().split('').sort().reverse().join('');
                Number(smallNumber);
                Number(bigNumber);
                number = bigNumber - smallNumber;
            }
            return number;
        }
        else throw new Error();
    }
    else throw new Error();
}

module.exports.kaprekarConstant = kaprekarConstant;