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
    if(array.every(e => e == 0))
        return [];
        
    const CopyCount = 2;

    for(let copiedIndex = array.length / 2 - 1; copiedIndex >= 0; copiedIndex--){
        let insertBeginIndex = copiedIndex * CopyCount;
        for(let offset = 0; offset < CopyCount; offset++) 
            array[insertBeginIndex + offset] = array[copiedIndex];
    }

    return array;
}

module.exports.calculateDoubleArray = calculateDoubleArray;