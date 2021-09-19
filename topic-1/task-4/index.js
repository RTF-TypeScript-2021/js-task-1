/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */
function countUniqueName(nameArray) {
     
    let fltrArr = nameArray.filter(function (value) {
        return typeof value === 'string';
      });
    
     const result = new Set(fltrArr.map(x=>x.toLocaleLowerCase()));
    return result.size;
    
}

module.exports.countUniqueName = countUniqueName;
