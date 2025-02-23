// Import required module
const readline = require('readline')


const Solution = () => {
  // Write your code here
  const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  interface.question("Enter the first number: ", (num1) => {
    interface.question("Enter the second number: ", (num2) => {
      const max = Math.max(Number(num1), Number(num2));

      console.log(`The maximum of the two numbers is: ${max}`);
      interface.close()
    })
  })
};

Solution();
module.exports = Solution;
