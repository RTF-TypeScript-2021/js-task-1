function countUniqueName(nameArray){
    let uniqueName = [];

    for (let i = 0; i < nameArray.length; i++)
        nameArray[i] = nameArray[i].toLowerCase();

    for (let i = 0; i < nameArray.length; i++){
        if (!uniqueName.includes(nameArray[i]))
            uniqueName.push(nameArray[i]);
    }

    return uniqueName.length;
}

module.exports.countUniqueName = countUniqueName;