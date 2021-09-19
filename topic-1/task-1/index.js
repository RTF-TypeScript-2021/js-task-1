/** Задача 1 - базовая работа с переменными */


/**
 * Реализуйте метод, который принимает 3 целочисленных значения a, b, c.
 * Метод должен возвращать true, если треугольник можно построить со сторонами заданной длины, и false в любом другом случае.
 * @param {*} a первая сторона
 * @param {*} b вторая сторона
 * @param {*} c третья сторона
 * @returns 
 */
function isIntegerValue(n){
    return n > 0 && typeof n === 'number' && n % 1 == 0;
}
 function isTriangle(a, b, c) {
     if (isIntegerValue(a) && isIntegerValue(b) && isIntegerValue(c)){
         return (a + b > c) && (a + c > b) && (b + c > a);
     }
     throw new Error();
}

module.exports.isTriangle = isTriangle; 