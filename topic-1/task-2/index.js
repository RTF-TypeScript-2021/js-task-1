function calculateDoubleArray(array){
  let result = [];
  let j = 0

  if (array.length % 2 !== 0 || isNullArray(array))
     return result;

  for (let i = 0; i < array.length / 2; i++){
     result[j] = array[i];
     result[j + 1] = result[j];
     j += 2;
  }

  return result;
}

function isNullArray(array){
  let flag = false;
  if (getCountUniqueValues(array) === 1 && array[0] === 0)
     flag = true;

  return flag;
}

function getCountUniqueValues(array){
  let uniqueValue = [];
  for (let i = 0; i < array.length; i++)
     if (!uniqueValue.includes(array[i]))
        uniqueValue.push(array[i]);
  
  return uniqueValue.length;
}

module.exports.calculateDoubleArray = calculateDoubleArray;