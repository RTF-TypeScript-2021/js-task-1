/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */
function countUniqueName(nameArray) {
    if (!Array.isArray(nameArray)) {
        throw new Error('Invalid argument');
    };
    nameArray.forEach(item => {
        if (typeof item !== 'string') {
            throw new Error('Invalid element type');
        }
    });
    for (let i = 0; i < nameArray.length; i++) {
        nameArray[i] = nameArray[i].toLowerCase();
    };
    let uniqueValues = new Set(nameArray);
    return uniqueValues.size;
}

module.exports.countUniqueName = countUniqueName;