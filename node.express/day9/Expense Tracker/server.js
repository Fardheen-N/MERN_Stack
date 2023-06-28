const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000

mongoose.connect("mongodb://localhost:27017")
app.listen(port,callBack);

function callBack(){
    console.log('connected to the server through the port : '+ port)
}