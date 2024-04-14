const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

app.use(cors)

app.get('/', function (req, res) {
    res.send("Hello from the server")
})


const socket_ID_USERS = {}
const roomID_USERS = {}

io.on('connection', function(socket){
    socket.on("when a user joins", async ({username, roomId}) => {
        socket_ID_USERS[socket.id] = {username}
        socket.join(roomId)
        
    })
})


const PORT = 5000;

server.listen(PORT, function () {
    console.log("Hello ");
})