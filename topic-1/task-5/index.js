/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
 function kaprekarConstant(number) 
 {    
    if (number > 9999 || number < 1000) throw new Error("Число не четырёхзначное"); 
    number = number.toString();
    for (let i = 1, counter = 0; i < number.length; i++) {
        if (number[0] == number[i])
            counter++;
        if (counter == 3) throw new Error("Все цифры в числе одинаковы");
    } 
    while(true)
    {
        number = calculate(number);             
        if (number == "6174") return parseInt(number);
    }
}

function calculate(number) {
    let sub = number.split('').sort((a, b) => a - b);
    let num1 = sub.join('');
    let num2 = sub.reverse().join('');
    num1 = parseInt(num1);
    num2 = parseInt(num2) - num1;
    if (num2 < 1000)
    { 
        return fixNumber(num2.toString().split(''));
    }
    return num2.toString();
}

function fixNumber(number)
{
    for (let i = 0; i < 4 - number.length; i++) 
        number.unshift("0");
    return number.join('');
}

module.exports.kaprekarConstant = kaprekarConstant;