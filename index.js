const http = require('http')
const express = require('express')
const {Server} = require('socket.io') 
const port = process.env.PORT || 5000
const httproutes = require('./routes/route')
const pagenotfound = require('./errors/pagenotfound')
const { console } = require('inspector')

const app = express()
const server = http.createServer(app)
const io = new Server(server) 

// Http server 
app.use(pagenotfound)
app.use('/home',httproutes)
io.on('connection',(client)=>{
  console.log("Idiot login")

  client.on('chat message',(message)=>{
    console.log('message: ',message)
  })
})
