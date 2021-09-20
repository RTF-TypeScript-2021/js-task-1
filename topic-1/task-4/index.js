/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */
 function countUniqueName(nameArray) {
    for (let i = 0; i < nameArray.length; i++){
        nameArray[i] = nameArray[i].toLowerCase();

        for (let j = 0; j < i; j++){
            if (nameArray[i] == nameArray[j]){
                delete nameArray[i];
                break;
            }
        }
    }

    let countOfNames = 0;
    for (name in nameArray){
        if (name != undefined) countOfNames++;
    }
    return countOfNames;
}

module.exports.countUniqueName = countUniqueName;