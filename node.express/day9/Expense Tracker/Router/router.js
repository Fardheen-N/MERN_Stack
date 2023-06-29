const express = require('express')
const Expense = require('../models/expense')
const router = express.Router();

router.post("/expense/create",createExpense)
router.get('/expense/get/:id',getAll)
router.patch('/expense/edit/:id',editExpense)
router.delete('/expense/delete/:id',deleteExpense)

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
    try {
        const {id}=req.params;
        const expense = await Expense.findByIdAndUpdate(id,req.body);
        if(!expense) res.status(404).json('id not found');
        else res.status(201).json('updated');
    } catch (error) {
        return res.status(404).send('entity not edited');
    }
}
async function getAll(req,res){
    try {
        const {id} = req.params;
        const expense = await Expense.findById(id);
        if(!expense) return res.status(404).send(`cannot find the expense entity with id :${id}`)
        res.status(201).json(expense);
    } catch (error) {
        return res.status(404).send('entity not found');
    }
}
async function deleteExpense(req,res){
    try {
        const {id} = req.params;
        const expense = await Expense.findByIdAndDelete(id);
        if(!expense) return res.status(404).json({message:`cannot find the expense entity with id :${id}`})
        else res.status(201).send('Entity deleted');
    } catch (error) {
        return res.status(404).send('entity not found');
    }
}

module.exports = router;