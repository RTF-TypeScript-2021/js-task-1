/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */
function countUniqueName(nameArray) {
  if(nameArray.some(elem => typeof(elem) === "string")){
    let nameArr =[];
    for(var item = 0; item < nameArray.length;item++)
    {
      nameArr.push(nameArray[item].toLowerCase());
    }
  
    return new Set(nameArr).size;
}
}

module.exports.countUniqueName = countUniqueName;