import express from 'express'; // Import the Express framework

// Create an Express application instance
const server = express();

/**
 * Global middleware function:
 * - This middleware runs for every incoming request to the server.
 * - Currently, it sends a response immediately, preventing further middleware execution.
 * - If you want to allow further request processing, use `next()` instead of `res.send()`.
 */
const globalMiddleware = (req, res, next) => {
    console.log('Global Middleware is hit');
    next(); // Pass control to the next middleware
};

// Apply the global middleware to all routes
server.use(globalMiddleware);

/**
 * First middleware function:
 * - Logs a message when a request is received at the root URL (`/`).
 * - Calls `next()` to pass control to the next middleware in the sequence.
 */
const middleWare1 = (req, res, next) => {
    console.log('First Middleware is hit');
    next(); // Move to the next middleware
};

/**
 * Second middleware function:
 * - Sends a response to the client after `middleWare1` has executed.
 */
const middleWare2 = (req, res) => {
    res.send('Second Middleware is hit'); // Sends response to the client
};

// Define a route for the root URL ("/") and apply both middleware functions in sequence
server.get("/", [middleWare1, middleWare2]);

// Alternative approaches:
// Both middlewares can be applied using direct parameters:
// server.get("/", middleWare1, middleWare2);

// Incorrect approach (causes overwriting, not sequential execution):
// server.get("/", middleWare1);
// server.get("/", middleWare2);

/**
 * Start the server and listen on port 3100.
 * Logs a message when the server starts successfully.
 */
server.listen(3100, () => {
    console.log('Server is listening on port 3100');
});
