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

let array = [1, 2, 3, 4, 5, 0, 0, 0, 0, 0]

calculateDoubleArray(array)

function calculateDoubleArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            array.splice(i, 1)
            i--
        } else {
            array.splice(i, 0, array[i])
            i++
        }
    }
    return array
}


module.exports.calculateDoubleArray = calculateDoubleArray;


