const express = require('express')
const Expense = require('../models/expense')
const router = express.Router();

router.post("/expense/create",createExpense)
router.get('/expense/get')
router.patch('/expense/edit',editExpense)
router.delete('expense/delete/:id')

async function createExpense(req,res){
    let body = req.body;
    let newExpense = new Expense({
        title:body.title,
        amount:body.amount,
        date:body.date
    })
    if(newExpense.title == ''||newExpense.title===undefined||newExpense.amount == 0||newExpense.amount===undefined){
        return res.status(404).send('entity not added');
    }
    await newExpense.save()
    console.log(body)
    res.status(201).json('expense created')
}
async function editExpense(req,res){
    
}
module.exports = router;