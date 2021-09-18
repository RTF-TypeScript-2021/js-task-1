/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number) {
    if(!Number.isInteger(number)) throw new Error(`the input must be Integer, but get ${typeof number}`);
    else if(number < 1001 || number > 9999) throw new Error("value is not in 999-10000");
    else if(new Set(number.toString(10).split("")).size === 1){
        throw new Error("bad number XXXX"); 
    } 
    for (; ;) {
        max = number.toString().split("").sort((lv, rv) => (rv - lv)); 
        min =  max.slice(0).reverse();
        diff = Number(max.join("")) - Number(min.join(""));
        if (diff == number) break;
        number = diff;
    }
    return diff;
}
module.exports.kaprekarConstant = kaprekarConstant;