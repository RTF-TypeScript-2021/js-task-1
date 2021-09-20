/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
const kaprekarConst = 6174; 

function kaprekarConstant(number){
    let qurrentNumberString = number.toString();
    if (qurrentNumberString.length !== 4){
        throw new Exception("Опс, кажется число не четырехзначное");
    }
    while (qurrentNumberString !== kaprekarConst){
        const numberArray = qurrentNumberString.toString().split('');
        const ascending = numberArray.sort().join('');
        const descending = numberArray.sort((a, b) => b - a).join('');
        qurrentNumberString = descending - ascending;
        if (qurrentNumberString === 0){
            throw new Exeption("Опс, кажется число состоит из одних и тех же цифр")
        }
    }
    return qurrentNumberString;
}

module.exports.kaprekarConstant = kaprekarConstant;