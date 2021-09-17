function kaprekarConstant(number){
    if (number < 1000 || number > 9999)
        throw new Error("A non-four-digit number is entered");

    while(number !== 6174){
        let digitsAsc = number.toString().split('').sort((a, b) => a - b).join('');
        let digitsDesc = number.toString().split('').sort((a, b) => b - a).join('');

        number = digitsDesc - digitsAsc;
        if (number == 0)
            throw new Error("A number with the same digits is entered");
    }

    return number;
}

module.exports.kaprekarConstant = kaprekarConstant;