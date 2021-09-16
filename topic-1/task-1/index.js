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
  let sides = [a, b, c];
  if (sides.some(x => !Number.isInteger(x) || x < 1))
   return false;
  return a + b > c && a + c > b && b + c > a;
}

module.exports.isTriangle = isTriangle;