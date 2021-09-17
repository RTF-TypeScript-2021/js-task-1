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
    let freeMembersCounter = 0; 
    let numberOfMembers = 0;
    let subArray = new Array();
    for (let i = 0, counter = 0; i < array.length; i++) {
        if (!Number.isFinite(array[i]))
            throw new Error("Массив некорректный");
        if (array[i] == 0) {
            counter++;
            freeMembersCounter++;
        }
        else { 
            subArray.push(array[i]);
            numberOfMembers++;
        }
        if (counter == array.length) return [];
    }
    if (freeMembersCounter == 0) 
        return array;
    array = new Array();
    for (let i = 0; i < freeMembersCounter; i++) { 
        array.push(subArray[i]);    
        array.push(subArray[i]);
    }    
    if (numberOfMembers > freeMembersCounter)
    {
        let n = numberOfMembers - freeMembersCounter
        for (let i = subArray.length - n; i < subArray.length ; i++)
            array.push(subArray[i]);                 
    }
    return array;
}

module.exports.calculateDoubleArray = calculateDoubleArray;