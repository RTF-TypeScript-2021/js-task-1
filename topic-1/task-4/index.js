/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */

function countUniqueName(nameArray) {
        let uniqNames = new Set();
        for(let i = 0; i < nameArray.length; i++){
            if (typeof(nameArray[i]) === 'string')
                uniqNames.add(nameArray[i].toLowerCase());
            continue;
        }
        return uniqNames.size;
}


module.exports.countUniqueName = countUniqueName;