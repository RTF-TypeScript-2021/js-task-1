/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */
function countUniqueName(nameArray) {
    const collection = new Set();
    let bufString = "";
    let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < nameArray.length; i++) {
        for (let j = 0; j < nameArray[i].length; j++) {
            if (alphabet.indexOf(nameArray[i][j].toLowerCase()) != -1) {
                bufString += nameArray[i][j];
            }
        }
        if (bufString != '') {
            collection.add(bufString);
        }
        bufString = "";
    }
    return collection.size;
}

module.exports.countUniqueName = countUniqueName;
