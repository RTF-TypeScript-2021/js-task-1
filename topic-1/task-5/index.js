/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
 function kaprekarConstant(number){
    console.log(number);
    if (number < 1000 || number > 9999)
        throw new Error('error')
    else 
        while(number != 6174)
            {
                let firstNumber = number.toString().split('').sort().reverse().join('');
                let secondNumber = number.toString().split('').sort().join('');
                if (secondNumber == firstNumber)
                    throw new Error('error')
                number = firstNumber - secondNumber;
            }
    return number;
}
module.exports.kaprekarConstant = kaprekarConstant;