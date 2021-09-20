/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number){
    if(number<1000 || number>9999)
        throw new Error();
    const diffDigits = new Set(String(number).split(''));
    if(diffDigits.size<2)
        throw new Error();
    let result = number;
    while(result!=6174)
        result = calculateNumber(result);             
    return result;
    
}
function calculateNumber(result){
    
    const bigNumber = result.toString().split('').sort().reverse().join('');
    const smallNumber = result.toString().split('').sort().join('');
    const resultCalculate = bigNumber - smallNumber;
    return resultCalculate;
}

module.exports.kaprekarConstant = kaprekarConstant;