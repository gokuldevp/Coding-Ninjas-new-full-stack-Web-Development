// Note:  Please do not change the prewritten code

// import the required module here
const math = require('./math');

const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
    // write your code here to Display the results of the calculations on the console.
    console.log(`The sum is ${math.sum(nums)}`);
    console.log(`The mean is ${math.mean(nums)}`);

};
Solution();
module.exports = Solution;
