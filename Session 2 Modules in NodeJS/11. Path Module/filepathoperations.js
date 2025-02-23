const fs = require('fs'); // Importing the 'fs' module to handle file system operations
const path = require('path'); // Importing the 'path' module to handle path operations

// Relative Path
const relativePath = path.join("path", "src", "home", "data.txt");
console.log("Relative Path:", relativePath);

// Absolute Path
const absPath = path.resolve("path", "src", "home", "data.txt");
console.log("Absolute Path:", absPath);

// File path to use in operations (choose relativePath or absPath as needed)
const filePathToUse = absPath;

// Get and log the file extension
console.log(path.extname(filePathToUse)); // Logs the file extension of the file path

// Delete the file if it exists
fs.unlink(filePathToUse, (err) => {
    if (err && err.code !== 'ENOENT') {
        // If an error occurs and it's not because the file doesn't exist, log the error and return
        return console.log(err);
    } else if (err && err.code === 'ENOENT') {
        // If the file doesn't exist, log a message
        console.log("No existing file found. Proceeding with creation.");
    }

    // Write data to the file
    fs.writeFile(filePathToUse, "Name: Gokul Dev P\nAge: 27", (err) => {
        if (err) {
            return console.log(err);
        } 
        console.log("File written successfully!");

        // Append data to the file
        fs.appendFile(filePathToUse, "\nName: Gopika\nAge: 18", (err) => {
            if (err) {
                return console.log(err);
            }
            console.log("Data appended successfully!");

            // Read and display the file contents
            fs.readFile(filePathToUse, { encoding: 'utf8' }, (err, data) => {
                if (err) {
                    return console.log(err);
                }
                console.log("File content:");
                console.log(data);
            });
        });
    });
});
