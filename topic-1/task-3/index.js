function factorial(n){
    if (n * 10 % 10 !== 0 || n < 0)
        throw new Error("The entered number must be a positive integer")

    if (n === 0 || n === 1)
        return 1;
    if (n < 0)
        throw new Error("A negative number is entered");
    let result = 1;
    for (let i = 2; i < n + 1; i++){
        result *= i;
    }

    return result;
}

module.exports.factorial = factorial;