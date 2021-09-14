/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */
const countUniqueName = (nameArray) =>
  [
    ...new Set(
      nameArray.filter(
        (value) => /^[а-яА-Яa-zA-Z;.]*$/.test(value) && value !== ""
      )
    ),
  ].length;

module.exports.countUniqueName = countUniqueName;
