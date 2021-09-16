/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */
function countUniqueName(nameArray) {
    let set = new Set();

    nameArray
        .map(x => x.toLowerCase())
        .forEach(x => {
            if (!set.has(x))
                set.add(x)
        });

    return set.size;
}

module.exports.countUniqueName = countUniqueName;