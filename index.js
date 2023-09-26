
const express = require('express');
const port  = "8080"
const connect = require('./connection');
const userRoute = require('../Backend-server-1/Routes/userRoute');
const app = express()
const cors = require('cors');
const postRoute = require('../Backend-server-1/Routes/postRoute');

app.use(express.json())
app.use(cors())

app.use('/user',userRoute)
app.use('/post',postRoute)

app.get('/',(req,res)=>{
    res.send('Welcome to home route')
})


app.listen(8080,()=>{
    connect()
    console.log('server is running on port 8080')
})
