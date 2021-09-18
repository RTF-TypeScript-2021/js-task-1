/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */
function countUniqueName(nameArray) {
    if (!Array.isArray(nameArray) || 
        nameArray.length === 0 || 
        nameArray.some((el)=> typeof(el) !== 'string')){
        throw new Error("expected string Array");
    }
    let uniqueNames = [];
    for (let name of nameArray) {
        if (!uniqueNames.includes(name.toLowerCase())) uniqueNames.push(name.toLowerCase());
    }
    return uniqueNames.length;
}

module.exports.countUniqueName = countUniqueName;