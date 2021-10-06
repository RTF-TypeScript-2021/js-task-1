/** Задача 1 - базовая работа с переменными */


/**
 * Реализуйте метод, который принимает 3 целочисленных значения a, b, c.
 * Метод должен возвращать true, если треугольник можно построить со сторонами заданной длины, и false в любом другом случае.
 * @param {*} a первая сторона
 * @param {*} b вторая сторона
 * @param {*} c третья сторона
 * @returns 
 */

isTriangle(7, 2, 2)
function isTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return true;
    } else {
        return false;
    }
}

module.exports.isTriangle = isTriangle;