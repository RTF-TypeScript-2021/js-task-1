/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */
function countUniqueName(nameArray) {      
    for (let i = 0; i < nameArray.length; i++) {
        if (typeof(nameArray[i]) != "string")
            throw new Error("Массив некорректный");
        nameArray[i] = nameArray[i].toLowerCase();
    }
    let set = new Set(nameArray);
    return set.size;
}

module.exports.countUniqueName = countUniqueName;