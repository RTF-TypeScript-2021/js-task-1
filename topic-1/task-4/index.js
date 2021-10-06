/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */

function countUniqueName(nameArray) {

    var lowerArray = [];
    for (i = 0; i < nameArray.length - 1; i++) {
        let name = nameArray[i].toString().toLowerCase().replace(/[; .,!?:–]/, "")
        if (nameArray[i] != "") {
            lowerArray.push(name)
        }
    }

    const unique = new Set(lowerArray);

    return unique.size
}

countUniqueName(arrayOfName)

module.exports.countUniqueName = countUniqueName;
