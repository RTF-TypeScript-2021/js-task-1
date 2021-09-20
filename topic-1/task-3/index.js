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
    if (isNaN(n)){
        throw new Error(`${n} is not a number`)
    }
    if (n  < 0){
        throw new Error(`${n} is less than zero`);
    }
    if (!Number.isInteger(n)){
        throw new Error(`${n} is not an integer`)
    }
    switch(n){
        case 0:
            return 1;
        case 1:
        case 2:
            return n;
        default:
            return GetFactorialTree(2,n);
    }
}

function GetFactorialTree(left, right){
    if (left>right){
        return 1;
    }
    if (left === right){
        return left;
    }
    if (right-left == 1){
        return left*right;
    }
    let tmp = Math.floor((left+right)/2);
    return GetFactorialTree(left,tmp) * GetFactorialTree(tmp+1,right)
}
console.log(factorial(5));
module.exports.factorial = factorial;