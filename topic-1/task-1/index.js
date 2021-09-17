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
    let max = getMax(a, b, c);
    let min = getMin(a, b, c);
    let mind = getMind(max, min, a, b, c);

    return max < min + mind;
}

function getMax(a, b, c) {
    return a > b ? (a > c ? a : c ): (b > c ? b : c);
}

function getMin(a, b, c) {
    return a < b ? (a < c ? a : c ): (b < c ? b : c);
}

function getMind(max, min, a, b, c) {
    return a === max && b === min || b === max && a === min ? c
        : (a === max && c === min || c === max && a === min ? b : a);
}

module.exports.isTriangle = isTriangle;