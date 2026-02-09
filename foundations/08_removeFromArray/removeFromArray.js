const removeFromArray = function(array, ...args) {
    let result = [];

    result = array.filter((element) => element != args);
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
