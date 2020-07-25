const express = require('express')
const app = express()
const path = require('path')

app.use('/public' , express.static(path.join(__dirname, '/public')))

app.get('/' , (req , res) => {
    res.send(`<h1>Hello</h1>
            <p>This is Basic Backend file for Deployment</p>`)
})


app.listen('5656' , ()=>{
    console.log(`Listening at localhost:5656`)
})