"use strict"

/**
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 */

const countUniqueName = nameArray =>
    new Set(nameArray.filter(name => name.match("^[A-Z;a-z;А-Я;а-я;.]+$"))).size;

module.exports.countUniqueName = countUniqueName;