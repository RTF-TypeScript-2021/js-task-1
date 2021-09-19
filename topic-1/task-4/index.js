function countUniqueName(nameArray){
    if (!Array.isArray(nameArray))
        throw new Error("The entered value is not a string array");
    for (let i = 0; i < nameArray.length; i++)
        if (typeof nameArray[i] !== "string")
            throw new Error("The value is not a string element of array");
    for (let i = 0; i < nameArray.length; i++)
        nameArray[i] = nameArray[i].toLowerCase();

    let uniqueValues = new Set(nameArray);
    return uniqueValues.size;
}

module.exports.countUniqueName = countUniqueName;