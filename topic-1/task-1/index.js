/** Задача 1 - базовая работа с переменными */


/**
 * Реализуйте метод, который принимает 3 целочисленных значения a, b, c.
 * Метод должен возвращать true, если треугольник можно построить со сторонами заданной длины, и false в любом другом случае.
 * @param {*} a первая сторона
 * @param {*} b вторая сторона
 * @param {*} c третья сторона
 * @returns 
 */

 function isTriangle(a, b, c) {
     if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c))
         throw new Error('There is non-integer number');
     if (a < 0 || b < 0 || c < 0)
         throw new Error('There is negative number')
     return a < b + c && b < a + c && c < a + b;
}

module.exports.isTriangle = isTriangle;