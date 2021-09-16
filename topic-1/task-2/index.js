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
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] != 0) {
            result.push(array[i]);
            result.push(array[i]);
        }
    }
    return result;
}

module.exports.calculateDoubleArray = calculateDoubleArray;