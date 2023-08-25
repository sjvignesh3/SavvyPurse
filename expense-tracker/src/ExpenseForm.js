
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './ExpenseForm.css'; 


const ExpenseForm = () => {
  const location = useLocation();
  const name=location.state.name;
  const [budget, setBudget] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  

  

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  
  
  const handleAddExpense = (e) => {
    e.preventDefault();

  
   
    axios.post('http://localhost:4000/expense', { 
      uname:name,
      ubudget: budget,
      ucategory: category,
      uamount: amount,
    })
    .then(function (response) {
      console.log(response);
     
    })
    .catch(function (error) {
      console.log(error);
    });

    setBudget('');
    setCategory('');
    setAmount('');
  };

  return (
    <div>
      
    <div className="expense-form">
      <h2>Add Expense</h2>
      <div className="input-container">
        <label htmlFor="budget">Budget:</label>
        <input type="number" id="budget" value={budget} onChange={handleBudgetChange} />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" value={category} onChange={handleCategoryChange} />
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
      </div>
      <button onClick={handleAddExpense}>Add Expense</button>
      
    </div>

    
   
    </div>
  );
};

export default ExpenseForm;
