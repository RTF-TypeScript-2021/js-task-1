/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number) {
    if (typeof (number) !== 'number' || number.toString().length !== 4)
        throw Error;
    let dif = getDifferenceWithOrders(number);
    while (dif !== "6174") {
        if (dif === "0")
            throw Error;
        dif = getDifferenceWithOrders(dif);
    }
    return parseInt(dif);
}

function getDifferenceWithOrders(number) {
    let numStrArray = number.toString().split('').sort(getBiggerNumber);
    let orderBy =  parseInt(numStrArray.join(''));
    let orderByDesc = parseInt(numStrArray.reverse().join(''));
    return (orderBy > orderByDesc ? orderBy - orderByDesc : orderByDesc - orderBy).toString();
}

function getBiggerNumber(a, b) {
    return a - b;
}

module.exports.kaprekarConstant = kaprekarConstant;