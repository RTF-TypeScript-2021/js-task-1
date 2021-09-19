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
        max = number.toString().split("").sort((lv, rv) => (rv - lv)); 
        min =  max.slice(0).reverse();
        return Number(max.join("")) - Number(min.join(""));
    }
    if (!Number.isInteger(number)) {
        throw new Error(`the input must be Integer, but get ${typeof number}`);
    } 
    else if (number < 1001 || number > 9999) {
        throw new Error("value is not in 999-10000");
    }
    else if (getDifference(number) === 0 || getDifference(number) === 999) {
        throw new Error("bad number XXXX or XYXX where Y= X+-1"); 
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