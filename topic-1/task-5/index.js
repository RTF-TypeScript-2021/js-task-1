/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
let c;
let m;
function kaprekarConstant(number){
    let b = String(number);
    if ((b.length < 5) && ((b[1] != b[2]) || (b[1] != b[3]) || (b[1] != b[4]))){
        return math(number);
    }
    throw Error;
}

function math(a){
    let b = String(a).split('').sort();
    c = Number(b[3] + b[2] + b[1] + b[0]);
    m = Number(b[0] + b[1] + b[2] + b[3]);
    console.log(a);
    if (c - m == 6174){
        return 6174;
    }
    math(c - m);
}

module.exports.kaprekarConstant = kaprekarConstant;