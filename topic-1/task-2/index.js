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
     let array2 = [];
     for (let obj of array){
         //Добавил условие на проверку, в конце массива должна быть пустая ячейка - 0.
         if (array[array.length - 1] != 0){
             break;
         }
         if (obj !== 0){
             array2.push(obj, obj);
         }
         else {
            break;
         }
     }
     return array2;
}

module.exports.calculateDoubleArray = calculateDoubleArray;