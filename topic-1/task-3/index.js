//Задача 3 - факториал 

/**
 * В математике факториал неотрицательного целого числа n, обозначаемый n!, 
 * Является произведение всех положительных целых чисел, меньших или равных n. 
 * Например: 5! = 5 * 4 * 3 * 2 * 1 = 120. По соглашению, значение 0! равно 1.
 * Напишите функцию для вычисления факториала для заданного входного значения
 * Если число меньше 0, генерируйте ошибку.
 * @param n число
*/

function factorial(n) {
    if (!Number.isInteger(n) || n < 0 )
        throw new Error("Argument error. Argument n must be a positive number.");

    let factorial = 1;
    for (let i = 2; i <= n; i++)
        factorial *= i;

    return factorial;
}

module.exports.factorial = factorial;