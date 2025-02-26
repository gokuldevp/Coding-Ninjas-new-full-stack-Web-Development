import express from 'express'; // Import the Express framework

// Create an instance of the Express application
const server = express();

// Middleware to serve static files from the "public" directory
// Static files in the public folder can be accessed directly, e.g., http://localhost:3200/home.html
server.use(express.static('public'));

// Handle GET request at the root path
// This route sends a welcome message when accessing the root URL
server.get('/', (req, res) => {
  res.redirect('/home.html');
});

// Assign the server to listen on port 3200
// Start the server and listen on port 3200
server.listen(3200, () => {
  console.log(`Server running at http://localhost:3200`);
});
