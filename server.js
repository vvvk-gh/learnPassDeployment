const express = require('express')
const app = express()
const path = require('path')

const http = require('http')
const socketio = require('socket.io')

//creating an experss app into http app
const server = http.createServer(app)
//attaching socket to the sever
const io = socketio(server)

io.on('connection' , (socket) => {
        console.log(`Connected to the socket id: ${socket.id}` )
})


//for heroku port
const SERVER_PORT = process.env.PORT || 5656

app.use('/public' , express.static(path.join(__dirname, '/public')))

app.get('/' , (req , res) => {
    res.send(`<h1>Hello</h1>
            <p>This is Basic Backend file for Deployment</p>`)
})


app.listen( SERVER_PORT , ()=>{console.log(`Listening at localhost:5656`)})