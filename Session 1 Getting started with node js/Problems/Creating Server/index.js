// Please don't change the pre-written code
// Import the necessary modules here
import * as http from 'http';

// Write your code here
const port = 8080;
const server = http.createServer((req, res) => {
    return res.end(`Response received at port ${port}.`);
});

server.listen(port);

export default server;
