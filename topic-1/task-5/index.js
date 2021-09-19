/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number) {
    /*Очень не хотел дублировать код, но единственный простой
        способ проверить number на числа XXXX или XXYX где Y = X+-1
        Это найти разность между возможным максимумом и минимумом из этих чисел, 
        что и является основным действием алгоритма*/ 
    function getDifference(number) {
        numberArr = number.toString().split(""); 
        if (number<1000) {
            numberArr.push("0");
        } 
        max = numberArr.slice(0).sort((lv, rv) => (rv - lv)); 
        min =  max.slice(0).reverse();
        return Number(max.join("")) - Number(min.join(""));
    }
    if (!Number.isInteger(number)) {
        throw new Error(`the input must be Integer, but get ${typeof number}`);
    } 
    else if (number < 1000 || number > 9999) {
        throw new Error("value is not in 999-10000");
    }
    else if (getDifference(number) === 0) {
        throw new Error("bad number XXXX"); 
    } 
    for (;;) {
        diff = getDifference(number); 
        if (diff == number) {
            break;
        }
        number = diff;
    }
    return diff;
}
module.exports.kaprekarConstant = kaprekarConstant;