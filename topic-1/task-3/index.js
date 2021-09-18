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
    if(!Number.isInteger(n) || n<0){
        throw new Error("expected value must be an integer and be greater than zero")
    }
    else if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

module.exports.factorial = factorial;