const fs = require('fs')
// const {add,multi}= require('./app');
// // console.log(fs)
// // fs.readFile(`${__dirname}/states.txt`,(err,data)=>{
// //     if(err) console.log("Error");
// //     else console.log(data.toString());
// // })
// // const inputData = 'bankai kathon karamath shinju ⚔️'
// // fs.writeFile(`${__dirname}/bleach.txt`,inputData,(err)=>{
// //     if(err) console.log("error while writing")
// //     else console.log("done writing");
// // })

// // fs.readFile(`${__dirname}/bleach.txt`,(err,data)=>{
// //     if(err) console.log("Error");
// //     else console.log(data.toString());
// // })
// const name = 'chandraaaaaaaaaa'
// console.log(`Hello ${name}`);

function read(filepath){
    return new Promise((resolve,reject) => {
        fs.readFile(filepath,(err,data) => {
            if(err) reject("Failed during read")
            else resolve(data)
        })
    })
} 

function write(input,filepath){
    return new Promise((resolve,reject) => {
        fs.writeFile(input,filepath,(err) => {
            if(err) reject("Failed during write")
            else resolve('written')
        })
    })
} 

const input = 'yokoso vathakshiva soul socity hado-no 99'
read(`bleach.txt`)
.then(()=> write('bleach.txt',input))
.then((data)=>console.log(data.toString()))
.catch((err)=>console.log("Some error occured"))

// // read(`${__dirname}/bleach.txt`)
// // console.log(write(input,`${__dirname}/bleach.txt`))

// const fs = require('fs')

// function read(filepath){
//     return new Promise((resolve,reject) => {
//         fs.readFile(filepath,(err,data) => {
//             if(err) reject("Failed during read")
//             else resolve(data)
//         })
//     })
// } 

// function write(filepath,update){
//     return new Promise((resolve,reject) => {
//         fs.writeFile('bleach.txt', update, (err) => {
//             if (err) reject("error");
//             else resolve('The file has been saved!');
//           });
//     })
// } 


// read('bleach.txt')
// .then((data)=>{
//     console.log(data.toString())
//     write('bleach.txt',"Ani!!")
// .then((data)=>{
//     console.log(data.toString())
// })
// .catch((err)=>console.log("Some error occured"))
// })
// .catch((err)=>console.log(err))