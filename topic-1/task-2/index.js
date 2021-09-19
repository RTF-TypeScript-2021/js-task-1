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
    if (!Array.isArray(array)){
        throw new Error("expected array");
    }
    else{
        let freeSpace = array.length;
        let result = [];    
        for (let item of array.filter(el => el !==0))
        {
            if(result.length+2 > freeSpace){
                break;
            }
            result.push(item, item);
        }
        return result;
    }
}

module.exports.calculateDoubleArray = calculateDoubleArray;