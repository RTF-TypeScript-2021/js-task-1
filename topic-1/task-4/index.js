/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */
function countUniqueName(nameArray) {
  let count = 0;

  for(let i = 0; i < nameArray.length; i++)
  {
    if (typeof nameArray[i] === 'string')
    {
      count += 1;
    }
  }
  if (count != nameArray.length)
  {
    throw new Error();
  }

  let newArray = [];

  for(let i = 0; i < nameArray.length; i++)
  {
    nameArray[i] = nameArray[i].toUpperCase();
    if (newArray.includes(nameArray[i]))
      {
        continue;
      }
    else
      {
        newArray.push(nameArray[i]);
      }
  }

  return newArray.length;
}

module.exports.countUniqueName = countUniqueName;