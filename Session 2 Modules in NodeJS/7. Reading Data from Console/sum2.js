const { Console } = require('console');
const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = () => {
    console.log("Let's start a new calculation!");

    interface.question("Enter Number 1 (or type 'exit' to quit): ", (num1) => {
        if (num1.toLowerCase() === 'exit') {
            console.log("Goodbye!");
            interface.close();
            return;
        }

        interface.question("Enter Number 2: ", (num2) => {
            if (num2.toLowerCase() === 'exit') {
                console.log("Goodbye!");
                interface.close();
                return;
            }

            let result = Number(num1) + Number(num2);
            if (isNaN(result)) {
                console.log("Invalid input. Please enter valid numbers.");
            } else {
                console.log("Result:", result);
            }
            console.log("The calculation is completed!");

            askQuestion();
        });
    });
}

askQuestion();