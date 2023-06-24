const fs = require('fs')
const {add,multi}= require('./app');
// console.log(fs)
fs.readFile(`${__dirname}/states.txt`,(err,data)=>{
    if(err) console.log("Error");
    else console.log(data.toString());
})
const inputData = 'bankai kathon karamath shinju ⚔️'
fs.writeFile(`${__dirname}/bleach.txt`,inputData,(err)=>{
    if(err) console.log("error while writing")
    else console.log("done writing");
})

fs.readFile(`${__dirname}/bleach.txt`,(err,data)=>{
    if(err) console.log("Error");
    else console.log(data.toString());
})
const name = 'chandraaaaaaaaaa'
console.log(`Hello ${name}`);