/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number){
    while( number != 6174)
    let reversNumber = 0
    while( number ){ 
       reversNumber = (reversNumber * 10) + number % 10   
       number = number/10|0 }
       number = Math.abs(number - reversNumber)
    if (number = 0 ){
    throw new Error
    }
    if (number!= 6174){
        kaprekarConstant(number)
    }
}

module.exports.kaprekarConstant = kaprekarConstant;