const express = require('express')
const app = express()
const path = require('path')
const http = require('http')
//for heroku port
const SERVER_PORT = process.env.PORT || 5656

app.use('/public' , express.static(path.join(__dirname, '/public')))

app.get('/' , (req , res) => {
    res.send(`<h1>Hello</h1>
            <p>This is Basic Backend file for Deployment</p>`)
})


app.listen( SERVER_PORT , ()=>{console.log(`Listening at localhost:5656`)})