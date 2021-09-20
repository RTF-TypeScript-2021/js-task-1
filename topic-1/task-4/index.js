/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */
function countUniqueName(nameArray) {
    let nameSet = new Set();
    nameArray.filter(word => typeof(word) === 'string').forEach((word) => nameSet.add(word.toLowerCase()))
    return nameSet.size;
}

module.exports.countUniqueName = countUniqueName;