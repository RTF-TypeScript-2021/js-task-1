"use strict"

/**
 * @param {number} a Первая сторона
 * @param {number} b Вторая сторона
 * @param {number} c Третья сторона
 * @returns Результат проверки на возможность построения треугольника по 3 заданным сторонам
*/

let isTriangle = (a, b, c) => (a + b > c && b + c > a && a + c > b);
 
 module.exports.isTriangle = isTriangle;