import express from 'express'; // Import the Express framework

// Create an instance of the Express application
const server = express();

// Middleware function to handle default GET request at the root path
server.get('/', (req, res, next) => {
  console.log('First middleware hit');
  next(); // Pass control to the next middleware or route handler
});

// Handle GET request at the root path
server.get('/', (req, res) => {
  res.send('The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should not contain a request content.');
});

// Handle POST request at the root path
server.post('/', (req, res) => {
  res.send('The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.');
});

// Handle PUT request at the root path
server.put('/', (req, res) => {
  res.send('The PUT method replaces all current representations of the target resource with the request content.');
});

// Handle DELETE request at the root path
server.delete('/', (req, res) => {
  res.send('The DELETE method deletes the specified resource.');
});

// Assign the server to listen on port 3200
server.listen(3200, () => {
  console.log(`Server running at http://localhost:3200`);
});
