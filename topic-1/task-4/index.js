"use strict"

/**
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 */

const countUniqueName = nameArray => { 
    return new Set(
        nameArray
        // Плохое и костыльное решение с разбиением слова с \n на два с помощью flatMap, 
        // скорее всего это можно решить лучше с regexp, но голова уже не мыслит и дедлайн прошёл
            .flatMap(x => x.includes("\n") 
                ? [x.substr(0, x.indexOf("\n")), 
                    x.substr(x.indexOf("\n"), x.length - 1).replace(/\n/g,"")]
                : x
            )
            .map(name => name.toLowerCase())
            .filter(name => name.match("^[A-Z;a-z;А-Я;а-я;.;Ё-ё]*$"))
    ).size;
}

module.exports.countUniqueName = countUniqueName;