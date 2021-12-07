/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */

function countUniqueName(nameArray) {
    return new Set(nameArray.filter(x => x && /^[А-Яа-я;.A-Za-z]*$/.test(x))).size;
}

module.exports.countUniqueName = countUniqueName;