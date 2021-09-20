/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */
function countUniqueName(nameArray) {
    if (!Array.isArray(nameArray))
        throw new Error('Incorrect argument');
    nameArray.forEach(name => {
        if (typeof name !== 'string')
            throw new Error('Array has element with incorrect type');
    });
    const lowerNames = nameArray.map(x => x.toLowerCase());
    const uniqueNames = new Set(lowerNames);
    return uniqueNames.size;
}


module.exports.countUniqueName = countUniqueName;