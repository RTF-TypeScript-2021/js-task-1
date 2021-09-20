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
    let isVoid = true;
    if (array.length % 2 == 1) {
        return [];
    }

    for (i = array.length / 2 - 1; i >= 0; i--) {
       if (array[i] != 0) isVoid = false;
       array[i * 2] = array[i];
       array[i * 2 + 1] = array[i];
    }
    
    if (isVoid) {
        return [];
    }
    
    else {
        return array;
    }
}

module.exports.calculateDoubleArray = calculateDoubleArray;
