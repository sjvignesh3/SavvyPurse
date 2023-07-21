const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    catogory: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    budget:{
        type:Number,
        required:true
    },
    date: {
        type: String,
        required: true,
      },

   
});

const ExpenseInfo = mongoose.model('ExpenseInfo', ExpenseSchema);
module.exports = ExpenseInfo;