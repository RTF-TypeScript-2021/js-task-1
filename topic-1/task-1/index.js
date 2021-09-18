/**
 * @param {number} a Первая сторона
 * @param {number} b Вторая сторона
 * @param {number} c Третья сторона
 * @returns Результат проверки на возможность построения треугольника по 3 заданным сторонам
*/

function isTriangle(a, b, c) {
    return (a + b > c && b + c > a && a + c > b);
 }
 
 module.exports.isTriangle = isTriangle;