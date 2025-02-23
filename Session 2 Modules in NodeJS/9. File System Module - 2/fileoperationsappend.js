const fs = require('fs'); // Importing the 'fs' module to handle file system operations

// To read file content using blocking code.
console.log('Starting to Append'); // Logging the start of the append operation

const data = "\nName: Gokul Dev P\nAge: 27\nJob: Jobless"; // Defining the data to be appended to the file

// Appending data to 'data.txt' synchronously with UTF-8 encoding
fs.appendFileSync('data.txt', data, { encoding: 'utf8' }); // Appending the defined data to the file

console.log('This is another operation being performed'); // Logging that another operation is being executed
