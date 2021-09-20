/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */
function countUniqueName(nameArray) {
    let names = [];
        for (let word of nameArray) {
            let highWord = word.toUpperCase();
            if (!names.includes(highWord)) {
                names.push(highWord);
            }
        }
    return names.length;
}
module.exports.countUniqueName = countUniqueName;