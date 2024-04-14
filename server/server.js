const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const app = express()
const server = http.createServer(app)
const io = new Server(server)
app.use(cors)

app.get('/', function (req, res) {
    res.send("Hello from the server")
})

const PORT = 5000;

server.listen(PORT, function(){
    console.log("Hello ");
})