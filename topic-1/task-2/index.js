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
    if (!(array.every(item => item == 0)))
    {
        if ()
        for (let i = array.length-1; i >= array.length/2; i--)
        {
            array[i] = array[i-array.length/2];
        }
        return array.sort();
    }
    else return([]);
}

module.exports.calculateDoubleArray = calculateDoubleArray;