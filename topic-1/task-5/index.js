/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number){
    const toCheck = []
    number.toString().split().forEach( num => {
        if (!toCheck.includes(num))
            toCheck.push(num);
    });
    if (Math.floor(number / 10000) !== 0 ||
        Math.floor(999 / number) !== 0 ||
        toCheck.length === 1) {
        throw new Error();
    }
    let res = number;
    for (let i = 0; i < 8; i++) {
        const values = res.toString().split('').sort();
        const right = parseInt(values.join(''));
        const inverted = parseInt(values.reverse().join(''));
        res = Math.max(inverted, right) - Math.min(inverted, right);
        if (res === 6174)
            break;
    }
    return res;

}

module.exports.kaprekarConstant = kaprekarConstant;