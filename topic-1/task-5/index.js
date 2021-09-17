/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number) {    
    if (number > 9999 || number < 1000) throw new Error("Чмсло не четырёхзначное"); 
    for (let i = 1, b = number.toString(), counter = 0; i < b.length; i++) {
        if (b[0] == b[i])
            counter++;
        if (counter == 3) throw new Error("Все цифры в числе одинаковы");
    } 
    while(true)
    {
        number = calculate(number);             
        if (number == 6174) return number;
    }
}
function calculate(number) {
    let sub = number.toString().split('').sort((a, b) => a - b);
    let num1 = sub.join('');
    let num2 = sub.reverse().join('');
    num1 = parseInt(num1);
    num2 = parseInt(num2) - num1; 
    return num2;
}
module.exports.kaprekarConstant = kaprekarConstant;