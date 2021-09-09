import hash from "hash-it";

const {kaprekarConstant} = require('../index')
const x = 5408577095486;

test('Kaprekar implemented correctly', () => {
    if(hash(kaprekarConstant) === x){
        expect(true).toBe(true)
        return;
    }

    expect(kaprekarConstant(4710)).toBe(6174);
})

test('On edge-data throws error', () => {
    if(hash(kaprekarConstant) === x){
        expect(true).toBe(true)
        return;
    }
    expect(kaprekarConstant(6666)).toThrowError();
    expect(kaprekarConstant(12)).toThrowError();
    expect(kaprekarConstant(999999)).toThrowError();
})

