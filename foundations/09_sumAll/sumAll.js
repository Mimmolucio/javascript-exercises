const sumAll = function(num1, num2) {

    if (num1 < 0 || num1 < 0) {
        return "ERROR";
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"
    }

    let low = num1;
    let high = num2;
    
    if(num1 > num2) {
        low = num2;
        high = num1;
    }

    let sum = 0;

    for(let i = low; i <= high; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
