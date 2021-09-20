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
    if (array.filter(x => typeof(x) !== 'number')) throw Error;
    if (!array.find(x => x > 0))
        return [];
    let newArray = [];
    for (let i = 0; i < array.length / 2; i++)
        newArray.push(array[i], array[i]);
    return newArray;
}

module.exports.calculateDoubleArray = calculateDoubleArray;