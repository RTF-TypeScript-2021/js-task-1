/**
 * Задача 5 - реализовать функцию вычисляющую постоянную Капрекара
 * https://en.wikipedia.org/wiki/6174_(number)
 * Предусмотреть крайние случаи, для входных данных и при необходимости
 * выкидывать исключение.
 * */
function kaprekarConstant(number){
    const kap_count = 6174;
    let qurrent_n = String(number);  
    if (qurrent_n.length === 4) {
        while (number !== kap_count ){
            let ascending = String(number).split('').sort().join('');
            let descending = String(number).split('').sort().reverse().join('');
            if (descending === ascending){
                 throw new UserException('Error');
            }
            number = descending - ascending;
        };
    } else {
        throw new UserException('Durak?');
    }
    return number;
    
}


module.exports.kaprekarConstant = kaprekarConstant;
