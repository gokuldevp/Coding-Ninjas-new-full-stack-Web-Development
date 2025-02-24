// Import the built-in 'http' module in Node.js
const http = require('http');

// Create a new HTTP server
const server = http.createServer((req, res) => {
  // Check if the request method is POST
  if (req.method === 'POST') {
    console.log(req.body); // This line will not work because req.body is not automatically available

    // Initialize an empty string to store the incoming data chunks
    let body = '';

    // Listen for 'data' event to receive chunks of data
    req.on('data', (chunk) => {
      // Append the chunk of data to the body variable
      body += chunk.toString();
    });

    // Listen for the 'end' event which signals the end of data transmission
    req.on('end', () => {
      // Log the complete body to the console
      console.log(body);

      // Send a response back to the client indicating that data is received
      res.end('Data is received');
    });
  } else {
    // If the request method is not POST, send a welcome message
    res.end('Welcome to Node.js');
  }
});

// Start the server and have it listen on port 3100
server.listen(3100);

// Log a message to the console indicating that the server is up and running
console.log('Server is listening on port 3100');
