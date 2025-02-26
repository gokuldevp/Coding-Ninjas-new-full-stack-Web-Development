# Express Server Setup

This project demonstrates how to create a simple server using Express.js.

## Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/en/) (version 14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation
1. Clone the repository or create a new directory for your project.
2. Initialize a new Node.js project:
   ```sh
   npm init -y
   ```
3. Install Express:
   ```sh
   npm install express
   ```

## Creating the Server
The following code creates a basic Express server:

```javascript
import express from 'express'; // Import the Express module

// Create a server using Express
const server = express();

// Handle the default request to the root URL
server.get("/", (req, res) => {
    res.send(`${req.method}: Server Get Welcome to Express Server`);
});

// Handle requests to the /test URL
server.use("/test", (req, res) => {
    res.send(`${req.method}: Server Use Welcome to Express Server`);
})

// Listen on the specified port (3100)
server.listen(3100, () => {
    console.log('Server is listening on 3100');
});
```

## Running the Server
To start the server, run the following command:
```sh
node server.js
```
By default, the server will listen on port `3100`.

## Testing the Endpoints
Use a web browser or tools like [Postman](https://www.postman.com/) or `curl` to test the API endpoints.
- **Root Endpoint (`/`)**:
  ```sh
  curl http://localhost:3100/
  ```
  Expected Response: `GET: Server Get Welcome to Express Server`

- **Test Endpoint (`/test`)**:
  ```sh
  curl http://localhost:3100/test
  ```
  Expected Response: `GET: Server Use Welcome to Express Server`

## Notes
- Ensure the specified port (`3100`) is not in use.
- If you encounter errors related to ES module imports, add `"type": "module"` in your `package.json` file.

## License
This project is licensed under the MIT License.

