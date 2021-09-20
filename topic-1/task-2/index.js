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
    if (array.every(x=>x===0)){
        return [];
    }
    let resultArray = [];
    for(let j = 0; j<array.length/2;j++) {
        if (isNaN(array[j])){
            return `Элемент ${array[j]} не число`;
        }
        resultArray.push(array[j]);
        resultArray.push(array[j]);
    }
    return resultArray;
}
module.exports.calculateDoubleArray = calculateDoubleArray;