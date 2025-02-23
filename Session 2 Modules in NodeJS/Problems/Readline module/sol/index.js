// Import required module
const readline = readline('readline')
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})



const Solution = () => {
  // Write your code here
  interface.question("Enter the first number: ", (num1) => {
    interface.question("Enter the second number: ", (num2) => {
      if(num1>num2){
        console.log(`The Maximum of the two numbers is: ${num1}`);
      } else {
        console.log(`The Maximum of the two numbers is: ${num2}`);
      }
    })
  })
};

Solution();
module.exports = Solution;
