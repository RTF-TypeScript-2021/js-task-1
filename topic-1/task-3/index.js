//Задача 3 - факториал 

const { OperationCanceledException } = require("typescript");

/**
 * В математике факториал неотрицательного целого числа n, обозначаемый n!, 
 * Является произведение всех положительных целых чисел, меньших или равных n. 
 * Например: 5! = 5 * 4 * 3 * 2 * 1 = 120. По соглашению, значение 0! равно 1.
 * Напишите функцию для вычисления факториала для заданного входного значения
 * Если число меньше 0, генерируйте ошибку.
 * @param n число
*/

function factorial(n) {
    let point = 1;
    if (n === 0){
        return 1;
    }
    if (!Number.isInteger(n) || (n < 0)){
        throw new UserException ('Invalid number');
    }
    if (n > 0){
        for (let i = n; i > 0; i--){
        point *= i;
        }
    };
    return point;
}

module.exports.factorial = factorial;