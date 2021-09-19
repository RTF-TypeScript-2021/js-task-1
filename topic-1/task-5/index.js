function kaprekarConstant(number){
    if (number < 1000 || number > 9999)
        throw new Error("A non-four-digit number is entered");
    if (areFourDigitsSame(number))
        throw new Error("A number has the four same digits");

    while(number !== 6174){
        if (number < 1000)
            number = parseInt(number.toString() + '0');
        let digitsAsc = number.toString().split('').sort((a, b) => a - b).join('');
        let digitsDesc = number.toString().split('').sort((a, b) => b - a).join('');

        number = digitsDesc - digitsAsc;
    }

    return number;
}

function areFourDigitsSame(fourDigitNumber) {
    fourDigitNumber = fourDigitNumber.toString();
    return fourDigitNumber[0] === fourDigitNumber[1]
    && fourDigitNumber[1] === fourDigitNumber[2]
        && fourDigitNumber[2] === fourDigitNumber[3];
}
module.exports.kaprekarConstant = kaprekarConstant;