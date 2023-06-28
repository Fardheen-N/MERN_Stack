const express = require('express')
const path =require('path')

const router = express.Router();

router.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})
// router.get('/get',(req,res)=>{
//     res.send('hello')
// })
// router.post('/post',(req,res)=>{
//     res.send('this is post');
// })
// router.patch('/patch',(req,res)=>{
//     res.send('this is patch');
// })
// router.delete('/delete',(req,res)=>{
//     res.send('this is delete');
// })
// router.put('/put',(req,res)=>{
//     res.send('this is put');
// })
module.exports = router;