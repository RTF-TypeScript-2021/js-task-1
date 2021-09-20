/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number){
    /*const kap_count = 6174;
    let qurrent_n = String(number);

    if (qurrent_n.length === 4){
        
        while (kap_count !== Number(qurrent_n)){

            let ascending = Number(qurrent_n.split('').sort().join(''));
            let descending = Number(qurrent_n.split('').sort().reverse().join(''));
            
            Number(qurrent_n) = descending - ascending;
        };
    }
    else throw new UserException('Durak?');

    return qurrent_n;
    */
}


module.exports.kaprekarConstant = kaprekarConstant;