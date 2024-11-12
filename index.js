const http = require('http')
const express = require('express')
const {Server} = require('socket.io') 
const port = process.env.PORT || 5000
const httproutes = require('./routes/route')


const app = express()
const server = http.createServer(app)
const io = new Server(server) 

// Http server 
app.use('/home',httproutes)

io.on('connection',()=>{
  console.log("Idiot login")
})


server.listen(port,()=>{
  console.log(`Server is listening on port: ${port}`)
})
