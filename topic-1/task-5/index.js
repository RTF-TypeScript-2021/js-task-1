/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number) {
    checkInput(number);
    for (; ;) {
        diff = getMaxMin(number) - getMaxMin(number, 'min');
        if (diff == number) break;
        number = diff;
    }
    return diff;
}

function getMaxMin(number, param = "max") {
    mod = param === "max" ? 1 : -1;
    return Number(number.toString().split("").sort((lv, rv) => mod * (rv - lv)).join(""))
}

function checkInput(number) {
    let numArr = number.toString().split("")
    if (numArr.length != 4) throw Error(`numbers length must be equal 4, actual length: ${numArr.length}`)
    let uniqNum = []
    for (let num of numArr) {
        if (!uniqNum.includes(num) || num == 0) uniqNum.push(num);
        else {
            throw new Error('numbers must be different');
        }
    }
}

module.exports.kaprekarConstant = kaprekarConstant;