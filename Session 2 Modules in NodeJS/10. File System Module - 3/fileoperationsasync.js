const fs = require('fs'); // Importing the 'fs' module to handle file system operations

const fileName = "data.txt";

// Delete the file if it exists
fs.unlink(fileName, (err) => {
    if (err && err.code !== 'ENOENT') {
        // If an error occurs and it's not because the file doesn't exist, log the error and return
        return console.log(err);
    } else if (err && err.code === 'ENOENT') {
        // If the file doesn't exist, log a message
        console.log("No existing file found. Proceeding with creation.");
    }

    // Write data to the file
    fs.writeFile(fileName, "Name: Gokul Dev P\nAge: 27", (err) => {
        if (err) {
            return console.log(err);
        } 
        console.log("File written successfully!");

        // Append data to the file
        fs.appendFile(fileName, "\nName: Gopika\nAge: 18", (err) => {
            if (err) {
                return console.log(err);
            }
            console.log("Data appended successfully!");

            // Read and display the file contents
            fs.readFile(fileName, { encoding: 'utf8' }, (err, data) => {
                if (err) {
                    return console.log(err);
                }
                console.log("File content:");
                console.log(data);
            });
        });
    });
});
