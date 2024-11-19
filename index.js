require('dotenv').config()
const http = require('http')
const express = require('express')
const {Server} = require('socket.io') 
const port = process.env.PORT || 5000
const httproutes = require('./routes/route')
const pagenotfound = require('./errors/pagenotfound')
const connectDB = require('./models/db')
const mongoose = require('mongoose')



const app = express()
const server = http.createServer(app)
const io = new Server(server) 

// Http server 
app.use('/home',httproutes)
io.on('connection',(client)=>{
  console.log("Idiot login")


  client.on('chat message',(message)=>{
    console.log('message: ',message)
    io.emit(message)
  })
})

app.use(pagenotfound)
const main = async()=>{
  await connectDB(process.env.MONGO_URL);
  
  server.listen(port,()=>{
    console.log(`Server is listening on port : ${port}`)
  })
}
main()
