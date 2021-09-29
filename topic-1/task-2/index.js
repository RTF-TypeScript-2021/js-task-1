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

    let counter = 0;
    let array1 = [];
    
    for (i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            counter += 1;
        } else {
            array1.push(array[i], array[i]);
        }
    }

    if (counter == array.length) {
        return [];
    }

    if (array.length < array1.length) {
        while (array.length != array1.length) {
            array1 = array1.slice(0, array1.length - 1);
        }
    }
    
    if (array.length > array1.length) {
        while (array.length != array1.length) {
            array1.push(0);
        }
    }

    return array1;
    
}

module.exports.calculateDoubleArray = calculateDoubleArray;
