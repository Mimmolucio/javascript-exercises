const removeFromArray = function(array, ...args) {
    let result = [];

    result = array.filter((element) => !args.includes(element));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
