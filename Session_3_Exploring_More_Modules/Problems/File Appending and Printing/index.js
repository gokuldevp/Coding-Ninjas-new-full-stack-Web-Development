// Problem statement
// Practice writing a code snippet for handling POST requests, appending the request body to a file (file name unspecified) and printing its contents to the console. Gain hands-on experience applicable in scenarios requiring data storage, retrieval, and processing, such as logging or data persistence.

// Objectives:

// i) Handle POST Requests Properly:
// Complete the implementation of index.js to handle a POST request.

// ii) Write to File:
// Read the request body and append it to the "data.txt" file.

// iii) Read & Print Data:
// Read and print the new content of the text file to the console.

// iv) Proper Response Handling (res.end)
// Handle res.send() appropriately based on the request type:
// For POST requests, send a response confirming successful data processing.
// For non-POST requests, send an appropriate response.

// Import the required modules
import http from "http";
import fs from "fs";

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Check if the request method is POST
  if (req.method == 'POST') {
    // Initialize the data variable with a welcome message
    let data = 'Welcome to Coding Ninjas! Today\'s quote of the day is ';
    
    // Handle the data event to receive chunks of data
    req.on('data', (chunk) => {
      data += chunk.toString();
    });

    // Handle the end event when all data is received
    req.on('end', () => {
      console.log(data);

      // Write the received data to a file named data.txt
      fs.writeFile('data.txt', data, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log("File written successfully!");
        
        // Read the content of the file data.txt
        fs.readFile('data.txt', { encoding: 'utf8' }, (err, data) => {
          if (err) {
            return console.log(err);
          }
          console.log("File content:");
          console.log(data);
        });
      });

      // Send the response back to the client with the received data
      res.end(data);
    });

  } else {
    // Send a response indicating that a POST request is required
    res.end('Seems it is a ' + req.method + ' request, we need POST request');
  }

});

// Export the server module
export default server;
