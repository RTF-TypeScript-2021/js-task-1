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
    if(diffDigits<2)
        throw new Error();
    let result = number;
    while(result!=6174)
        result = calculateNumber(result);             
    return result;
    
}
function calculateNumber(result){
    const strArray = result.toString().split('');
    const arrNumber = new Array(strArray.length);
    for (let i = 0; i < strArray.length; i++) {
        arrNumber[i]= parseInt(strArray[i],10);
    }
    const bigNumber = parseInt(arrNumber.sort((a,b)=>b-a).join(''),10);
    const smallNumber = parseInt(arrNumber.sort((a,b)=>a-b).join(''),10);
    const resultCalculate = bigNumber - smallNumber;
    return resultCalculate;
}

module.exports.kaprekarConstant = kaprekarConstant;