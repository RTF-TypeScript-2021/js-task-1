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
    if (array[0] === 0 && array[array.length-1]===0) {
        return [];
    }
    for (let i = 1; i < array.length; i+=2) {
        if (isNaN(array[i])){
            return `Элемент ${array[i]} не число`;
        }
        if (i === 1){
            array[i] = array[i-1]
            continue;
        }
        array[i-1]  = array[i-2]+1;
        array[i] = array[i-1];
        // array[i] = i % 2 === 0
        //     ? array[i - 1] + 1
        //     : array[i - 1];
    }
    return array;
}



module.exports.calculateDoubleArray = calculateDoubleArray;