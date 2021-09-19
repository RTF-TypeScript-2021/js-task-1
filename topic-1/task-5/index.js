/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function compareNumbers(a, b) {
    return a - b;
}

function makeNumber(arrayNumbers) {
    let newNumber = 0;
    let n = 1000;
    for(let i = 0; i < arrayNumbers.length; i++){
        newNumber += arrayNumbers[i] * n;
        n = n / 10;
    }
    return newNumber;
}

function kaprekarConstant(number){
    let newNumber;
    if (number < 1000 || number > 9999 || typeof number !== 'number'){
        throw new Error();
    }else{
        number=number.toString();
        while (newNumber != 6174){
            let n = number.split('').sort(compareNumbers)
            let n1 = makeNumber(n);
            let n2 = makeNumber(n.reverse());
            if (n1 > n2){
                newNumber = n1 - n2;
                number = newNumber.toString().padEnd(4,'0');
            }else{
                newNumber = n2 - n1;
                number = newNumber.toString().padEnd(4,'0');
            }
            if(newNumber == 0){
                throw new Error();
            }
        }
        return newNumber;
    }

}


module.exports.kaprekarConstant = kaprekarConstant;