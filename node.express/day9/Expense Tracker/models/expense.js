const mongoose = require('mongoose')

let expenseSchema=mongoose.Schema({
    title:{type:String},
    amount:{type:Number},
    date:{type:Date}
});
module.exports=mongoose.model('expenses',expenseSchema)
