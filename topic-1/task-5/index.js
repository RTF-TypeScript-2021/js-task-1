const { OperationCanceledException } = require("typescript");

/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number){
    if( number.toString().length !== 4 && !isInteger(number)){
        throw new Error("Введено не целое четырехзначное число");
    }
    let firstNum =  number;
     while(firstNum !== 6174)
     {
         let sortNumber = firstNum.toString().split('').sort().join('');
         let reversSortNum = sortNumber.split('').reverse().join('');
         if(reversSortNum.toString().length !== 4)
         {
             reversSortNum = reversSortNum * 10;
         }
         firstNum = reversSortNum - sortNumber;
         if(firstNum == 0 ){
             throw new Error("Из данного числа нельзя получить постоянную Капрекара")
     }
  }
  return firstNum;
}

module.exports.kaprekarConstant = kaprekarConstant;