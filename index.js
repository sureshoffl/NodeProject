const http = require('http');
const express = require('express');
const app = express();
const env = require('dotenv').config();
const router =  require('./routes/route')


app.use('/', router);

app.listen(process.env.PORT,() => {
    return console.log('Server Listening');
})