const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
   
});

const ExpenseInfo = mongoose.model('ExpenseInfo', ExpenseSchema);
module.exports = ExpenseInfo;