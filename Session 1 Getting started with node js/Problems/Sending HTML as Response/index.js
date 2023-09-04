// Please don't change the pre-written code
// Import the necessary modules here
import * as http from 'http'
import * as fs from 'fs'
// Write your code here
const port = 8080;
const server = http.createServer((req, res) => {
    const index = fs.readFileSync('./index.html');
    return res.end(index);
})

server.listen(port);

module.exports = server;
