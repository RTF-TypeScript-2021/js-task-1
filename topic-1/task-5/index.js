/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number) {
    let numLength = number.toString().length
    if (Number.isInteger(number) === true && numLength === 4) {
        i = number
        while (i != 6174) {
            let numStr = i.toString()
            let arr = numStr.split('')
            count = new Set(arr)
            if (count.size >= 2) {
                let min = Number((arr.sort((a, b) => a - b)).join(''))
                let max = Number((arr.sort((a, b) => b - a)).join(''))
                i = max - min
            }
            else {
                throw new Error('В числе должно быть  как минимум две разные цифры')
            }
        }
        return i
    }
    else {
        throw new Error('Исходное значение должно быть целым четырёхзначным числом')
    }
}
//Не знаю как обойти Нули в начале, они отсекаются при выполнении :(
module.exports.kaprekarConstant = kaprekarConstant;
