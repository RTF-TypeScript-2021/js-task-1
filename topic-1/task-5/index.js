/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number){
    if (!Number.isInteger(number) || number < 1000 || number > 9999)
        throw new Error("Argument error. Argument number must be a positive number greater than 999 and less than 10000.");
    if (new Set(number.toString()).size < 2)
        throw new Error("Argument error. Argument number must have at least two different digits.");

    const maxIterationCount = 7;
    const splitNumber = n => n ? [ ...splitNumber(n / 10 | 0), n % 10 ] : [];
    const createNumber = array => array.reduce((previousValue, item, index) => previousValue + item * 10 ** (array.length - index - 1), 0);

    for (let i = 0; i < maxIterationCount; i++){
        let digits = splitNumber(number);
        digits.sort();
        let minNumber = createNumber(digits);
        digits.reverse();
        let maxNumber = createNumber(digits);
        number = maxNumber - minNumber;
    }
    return number;
}

module.exports.kaprekarConstant = kaprekarConstant;