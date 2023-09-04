// math.js - a CommonJS module for performing calculations on a set of numbers

function sum(nums) {
    return nums.reduce((total, num) => total + num, 0);
}

function mean(nums) {
    return sum(nums) / nums.length;
}


module.exports = {
    sum,mean
}