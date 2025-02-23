const fs = require('fs'); // Importing the 'fs' module to handle file system operations

// To read file content using blocking code.
console.log('Starting to delete'); // Logging the start of the delete operation

// Deleting the 'data.txt' file synchronously
try {
    fs.unlinkSync('data.txt'); // This line deletes the specified file from the file system
    console.log("File deleted")
} catch (err) {
    console.log("File didn't exists")
}

console.log('This is another operation being performed'); // Logging that another operation is being executed
