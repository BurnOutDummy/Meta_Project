const { Console } = require("console");
const express = require("express");
const http = require('http');
const { console } = require("inspector");
const app = express();
const port = 3000;
const {Server} = require('socket.io')
const server = http.createServer(app);


const httproute = require('./routes/route')
console.log("hello world ")

app.use('/',httproute)
app.get('/Home',(req,res)=>{
  res.send("Hello World")
  console.log("connected to http ")
})
const io = new Server(server);
io.on('connection',()=>{
  Console.log(`Somebody has connected to the server `)
})

server.listen(port, ()=>{
  console.log(`Server is listening on port : ${port}`)
})
