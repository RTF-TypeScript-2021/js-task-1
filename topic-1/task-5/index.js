/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number){
    let numArray1 = [], numArray2 = [];
    while(number > 0)
        {
            let remaind = number % 10;
            numArray1.push(remaind);
            number = (number - remaind) / 10;
        }

        if (new Set(numArray1).size < 2 || numArray1.length != 4)
            throw new Error(`${numArray1} incorrect`);
            
        while (!isKaprekarNumber(numArray1)){
            numArray1.sort()
            numArray2 = numArray1.slice();
            numArray1.reverse();
            arraySubtraction(numArray1, numArray2, 3);
        }

        let pow = 1;
        let kaprekarNumber = 0;
        for (let i = 3; i >= 0; i--){
            kaprekarNumber += pow * numArray1[i];
            pow *= 10;
        }
        
    return kaprekarNumber;
}

function isKaprekarNumber(numArray){
    const KaprekarNumberArray = [6, 1, 7, 4];
    for(let i = 0; i < 4; i++)
        if (KaprekarNumberArray[i] != numArray[i])
            return false;
    
    return true;
}

function arraySubtraction(numArray1, numArray2, index, transfer = 0){
    let discharge = numArray1[index] - numArray2[index] - transfer;
    transfer = 0;
    if (discharge < 0){
        transfer = 1;
        numArray1[index] = 10 + discharge;
    }
    else
        numArray1[index] = discharge;
    
    if (index > 0)
        arraySubtraction(numArray1, numArray2, index - 1, transfer);
    else if (transfer != 0)
        console.log("array1 less array2");
}

module.exports.kaprekarConstant = kaprekarConstant;