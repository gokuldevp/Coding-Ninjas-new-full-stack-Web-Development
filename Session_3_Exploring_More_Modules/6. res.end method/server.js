const http = require('http');

const server = http.createServer((req, res) => {
    res.write('This is coming from NodeJS server. ');
    
    if(req.url == '/first') {
        // Return here ensures we exit the function immediately after sending response
        // Prevents accidentally executing the default response below
        return res.end('This is the first response');
    }
    
    // Return here ensures we properly terminate the response even for default case
    // Without returns, multiple response.end() calls might happen for '/first' route
    return res.end('This is default response');
});

server.listen(3200, () => {
    console.log('Server is listening at 3200');
});


// Return is not needed if else is used
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('This is coming from NodeJS server. ');
    
//     if(req.url == '/first') {
//         res.end('This is the first response');
//         // No return needed here because...
//         // 1. There's no code following this conditional
//         // 2. The if/else structure ensures only one response is sent
//     } else {
//         res.end('This is default response');
//     }
// });

// server.listen(3200, () => {
//     console.log('Server is listening at 3200');
// });