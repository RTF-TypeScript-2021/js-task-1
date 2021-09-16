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
        .forEach(x => {
            let e = x.toLowerCase();
            if (!set.has(e)) {
                set.add(e)
            }
        });

    return set.size;
}

module.exports.countUniqueName = countUniqueName;