/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number) {
  if (new Set(number.toString()).size < 2 || number.toString().length !== 4) {
    throw new Error("");
  }
  while (number !== 6174) {
    const sorted = number.toString().split("").sort();
    const ascending = sorted.join("");
    const descending = sorted.reverse().join("");
    number = Math.abs(parseInt(descending) - parseInt(ascending));
  }
  return number;
}

module.exports.kaprekarConstant = kaprekarConstant;
