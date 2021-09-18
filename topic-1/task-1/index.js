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
    for (let i of arguments){
        if (isNaN(i) || i <= 0){
            return `Элемент ${i} не число или меньше 0 `;
        }
    }
    return (a + b > c && b + c > a && a + c > b);
}
module.exports.isTriangle = isTriangle;