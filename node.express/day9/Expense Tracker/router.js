const express = require('express')
const expenses = require('./models/expense')
const router = express.Router();

router.post("/expense/create")
router.get('/expense/get')
router.patch('/expense/edit')
router.delete('expense/delete/:id')
router.get("/",(req,res)=>{
    res.send('router connected')
})
module.exports = router;