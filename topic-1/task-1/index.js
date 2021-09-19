function isTriangle(a, b, c){
    if (a < 1 || b < 1 || c < 1 || !isNumber(a) || !isNumber(b) || !isNumber(c))
        throw new Error("The entered value must be a positive integer number")

    let max = getMax(a, b, c);
    let min = getMin(a, b, c);
    let mind = getMind(max, min, a, b, c);

    return max < min + mind;
}

function isNumber(number) {
    return typeof number === 'number';
}

function getMax(a, b, c){
    return a > b ? (a > c ? a : c ): (b > c ? b : c);
}

function getMin(a, b, c){
    return a < b ? (a < c ? a : c ): (b < c ? b : c);
}

function getMind(max, min, a, b, c){
    return a === max && b === min || b === max && a === min ? c
        : (a === max && c === min || c === max && a === min ? b : a);
}

module.exports.isTriangle = isTriangle;