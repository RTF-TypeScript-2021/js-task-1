/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */

function countUniqueName(nameArray) {
    const hashNames = new Set();
    nameArray.forEach(name => hashNames.add(name.toLowerCase()));
    return hashNames.size;
}

module.exports.countUniqueName = countUniqueName;