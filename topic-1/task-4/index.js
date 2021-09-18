const { isFunctionExpression } = require("typescript");

/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */
function countUniqueName(nameArray) {
    let newArr = [];
    for(let i = 0; i < nameArray.length; i++)
        newArr.push(nameArray[i].toLowerCase());
    return new Set(newArr).size;
}

module.exports.countUniqueName = countUniqueName;