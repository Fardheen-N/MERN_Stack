const express = require('express');
const mongoose = require('mongoose');
const router = require('./Router/router');

const app = express();
const port = 5000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

mongoose.connect("mongodb://127.0.0.1:27017/expense_tracker",{useUnifiedTopology: true,useNewUrlParser: true})
.then(()=>{console.log('connected to DB')});
app.listen(port,callBack);

function callBack(){
    console.log('connected to the server through the port : '+ port)
}