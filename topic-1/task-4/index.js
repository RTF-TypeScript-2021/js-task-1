/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */
function countUniqueName(nameArray) {
    let b = [nameArray[0]];
    let c = 0; 
    for (let i = 1; i < nameArray.length; i++){
        for(let obj of b)
        {
            if(nameArray[i] == obj){
                break;
            }
            if (nameArray[i] != obj){
                c += 1;
            }
            if (c == b.length){
                b.push(nameArray[i]);
            }
        }
        c = 0;
    }
    return b.length;
}

module.exports.countUniqueName = countUniqueName;