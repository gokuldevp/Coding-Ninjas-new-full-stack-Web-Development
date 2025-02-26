import express from 'express'; // Import the Express module

// Create a server using Express
const server = express();

// Handle the default request to the root URL
server.get("/", (req, res) => {
    // Respond with the request method and a welcome message
    res.send(`${req.method}: Server Get Welcome to Express Server`);
});

// Handle requests to the /test URL
server.use("/test", (req, res) => {
    // Respond with the request method and a welcome message
    res.send(`${req.method}: Server Use Welcome to Express Server`);
})

// Handle requests to the /codingNinja URL
server.get("/codingNinja", (req, res) => {
    // Respond with the request method and message "Be a Coding Ninja".
    res.send(`Be a Coding Ninja.`);
})

// Listen on the specified port (3100)
server.listen(3100, () => {
    // Log a message to indicate the server is running
    console.log('Server is listening on 3100');
});
