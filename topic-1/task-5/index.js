/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */

function kaprekarConstant(number) {
    let countDigits = number.toString().length;
    //Шаг первый: проверка на коиличество цифр. Должно быть 4.
    if (countDigits === 4) {
        var digitToArray = number.toString().split("");
        var arrayToCompareDigit = new Set(digitToArray)
        //Шаг второй: проверка на коиличество повторений цифр. Должна хотя бы одна не повториться.
        if (arrayToCompareDigit.size > 1) {
            var result = number
            //Проверяем, выполнено ли условие
            while (result != 6174) {
                result = result.toString().split("");
                //Шаг третий: создания чисел из исходного с отсортированными цифрами от большего к меньшему и от меньшего к большему
                let numberFromBigToSmall = result.sort((a, b) => b - a).join('');
                let numberFromSmallToBIG = result.sort((a, b) => a - b).join('');
                //Шаг четвертый: вычетаем из большего меньшее
                var result = numberFromBigToSmall - numberFromSmallToBIG
            }
            return result
        } else {
            throw new Error('Число не должно состоять из одинаковых цифр.')
        }
    } else {
        throw new Error('Число не из 4-х цифр.')
    }
}

module.exports.kaprekarConstant = kaprekarConstant;