const { Console } = require("console");
const express = require("express");
const http = require('http');
const { console } = require("inspector");
const app = express();
const port = 3000;
const {Server} = require('socket.io')
const server = http.createServer(app);
console.log("hello world ")

app.get('/Home',(req,res)=>{
  res.send("Hello World")
})
const io = new Server(server);
io.on('connection',()=>{
  Console.log(`Somebody has connected to the server `)
})

server.listen(port,()=>{
  console.log(`Server is listening on port : ${port}`)
});

