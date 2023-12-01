const http = require('http');
const express = require('express');
const app = express();
const env = require('dotenv').config();
const router =  require('./routes/route');
const authController = require('./controllers/authController');
const authService = require('./services/authService');


app.use('/', router);

app.listen(process.env.PORT,() => {
    return console.log('Server Listening');
})