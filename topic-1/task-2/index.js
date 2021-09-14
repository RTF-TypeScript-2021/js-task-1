/** Задача 2 - работа с циклом */

// Дан массив [1, 2, 3, 4, 5, 0, 0, 0, 0, 0] такого вида.
// Необходимо привести его к виду [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
// То есть, удвоить количество каждого элемента.
// Где элемент со значением 0 - свободная ячейка.
// Для массива, состоящего из нулей(свободных ячеек), верните пустой.

/**
 *
 * @param {*} array массив
 * @returns удвоенный массив
 */
function calculateDoubleArray(array) {
  const res = [];
  array.forEach((value, index) => {
    if (value === 0) {
      return;
    }
    if (array[array.length - (index + 1)] === 0) {
      res.push(value);
    }
    res.push(value);
  });
  return res;
}

module.exports.calculateDoubleArray = calculateDoubleArray;
