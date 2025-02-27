import express from 'express'

const server = express()
const port = 8000

server.get("/", (req, res) => {
    res.send("Welcome to my inventory");
});

server.use(express.static('src/views'))

server.listen(port, () =>{
    console.log(`Server is running at port: ${port}`);
});