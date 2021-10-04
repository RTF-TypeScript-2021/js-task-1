/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */
function countUniqueName(nameArray) {
    if (Array.isArray(nameArray) === true) {
        for (i = 0; i < nameArray.length; i++) {
            nameArray[i] = nameArray[i].toLowerCase()
        }
        console.log(nameArray);
        count = new Set(nameArray)
        return count.size
    }
    else {
        throw new Error('Ожидался массив')
    }
}
module.exports.countUniqueName = countUniqueName;

