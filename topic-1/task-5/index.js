/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number){
  let exceptionNumbers = [1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999];

  if (number < 1000 || number > 9999 || exceptionNumbers.includes(number))
  {
    throw new console.error();// Можно ли убрать эти скобки, если в if или цикле всего одна строчка?
  }

  let fNumber = 0;
  let sNumber = 0;
  let twoNumbers = [];
  let tNumber = number;

  while (tNumber !== 6174)
  {
    twoNumbers = sorted(tNumber);// Как принять кортеж и обратиться к каждому элементу? 
    fNumber = twoNumbers[0];
    sNumber = twoNumbers[1];
    tNumber = fNumber > sNumber ? fNumber - sNumber : sNumber - fNumber;
  }

  return tNumber;
}

function sorted(number) {
  let sortArray = [];
  let firstNumber = 0;
  let secondNumber = 0;

  for (let i = 1; i < 5; i++)
  {
    sortArray.push(number % 10);
    number = Math.floor(number / 10);
  }
  sortArray.sort();
  for (let i = 0; i < sortArray.length; i++)
  {
    firstNumber = firstNumber * 10 + sortArray[i];
  }
  sortArray.reverse();
  for (let i = 0; i < sortArray.length; i++)
  {
    secondNumber = secondNumber * 10 + sortArray[i];
  }

  return [firstNumber, secondNumber]; //Можно передать кортеж? (firstNumber, secondNumber)
}


module.exports.kaprekarConstant = kaprekarConstant;