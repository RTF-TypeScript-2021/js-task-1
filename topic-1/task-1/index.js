/** Задача 1 - базовая работа с переменными */


/**
 * Реализуйте метод, который принимает 3 целочисленных значения a, b, c.
 * Метод должен возвращать true, если треугольник можно построить со сторонами заданной длины, и false в любом другом случае.
 * @param {*} a первая сторона
 * @param {*} b вторая сторона
 * @param {*} c третья сторона
 * @returns 
 */
 function isTriangle(a, b, c) { 
    if (typeof(a) != "number" || a <= 0)
        throw new Error("Сторона 'a' некорректна");
    if (typeof(b) != "number" || b <= 0)
        throw new Error("Сторона 'b' некорректна");
    if (typeof(c) != "number" || c <= 0)
        throw new Error("Сторона 'c' некорректна");           
    if (a >= (b + c) || b >= (a + c) || c >= (a + b))
        return false;
    return true;
}

module.exports.isTriangle = isTriangle;