/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number){

    let numberString = number.toString();
    if (numberString.length !== 4){
        throw new Error(` Число ${number} не 4-ых значное `)
    }
    if (number === 6174) {
        return number;
    }
    let splitArrayNumbers = numberString.toString().split("");
    if (new Set(splitArrayNumbers).size+2 <= splitArrayNumbers.length){
        throw new Error("Число состоит из 3 или более повторяющихся цифр");
    }
    let maxValue = getValueFromSet(splitArrayNumbers.sort((a,b)=>b-a));
    let minValue = getValueFromSet(splitArrayNumbers.sort());
    return kaprekarConstant(maxValue-minValue);

}

function getValueFromSet(set){
    let MaxNumber="";
    for (let i = 0; i < set.length ; i++) {
        if(isNaN(set[i])){
            throw new Error(`${set[i]} не число`)
        }
        MaxNumber+=set[i];
    }
    return Number.parseInt(MaxNumber);
}

module.exports.kaprekarConstant = kaprekarConstant;