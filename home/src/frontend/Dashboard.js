import React,{useState,useEffect} from 'react';
import axios from 'axios';
 const Dashboard = () => {

  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();

   const[catogory,setCatogory]=useState('');
   const[amount,setAmount]=useState('');
   const [budget,setBudget]=useState('');
   const [totalPrice, setTotalPrice] = useState(0);
   const [userError, setUserError] = useState('');
  

   const total=document.getElementById("amount");
   const expenditure=document.getElementById("expenditure-value");
   const balance=document.getElementById("balance-amount");

   

 

   const handleExpense = async (e) => {
    e.preventDefault();
    // Send data to server
 
    if(budget==="") {
      setUserError('Fill all the required field');
    return
  }
    if(catogory===""||amount==="") {
      //setUserError('Fill all the required field');
      setUserError('Fill all the required field');
      return;
    }
    
    axios.post('http://localhost:4000/adddata', {catogory,amount,budget,date})
      .then(function (response) {
        console.log(response);
        setUserError('');
        const status=JSON.stringify(response.data);
        //setUserError(status);
        
      })
      .catch(function (error) {
        console.log(error);
      });
      
     setCatogory('');
     setAmount('');

     
    

    };

  const handleTotal = async (e) => {
    e.preventDefault();

     
       axios.get('http://localhost:4000/retrive')
       .then(function (response) {
      const data = response.data; // Assuming the API returns an array of data

      // Calculate the total price by summing up the "price" property of each item
      const totalPrice = data.reduce((accumulator, item) => accumulator + item.amount, 0);

      setTotalPrice(totalPrice);
      
       })
       .catch(function (error) {
        console.log(error);
      });
    
     total.innerHTML=budget;
     expenditure.innerHTML=totalPrice;
     balance.innerHTML=budget-(totalPrice);
  };


  

   return(
       
   
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Budget App</title>
   
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    />
   
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
      rel="stylesheet"
    />
   
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="wrapper">
      <div class="container">
        <div class="sub-container">
         
          <div class="total-amount-container">
            <h3>Budget</h3>
           
            <input
              type="number"
              id="total-amount"
              
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="Enter Total Amount"
            />
           
           {userError && <span style={{ color: 'red', fontSize: '14px' }}>{userError}</span>}
           
          </div>

       
          <div class="user-amount-container">
            <h3>Expenses</h3>
           
            <input
              type="text"
              class="product-title"
              id="product-title"
              value={catogory}
              onChange={(e) => setCatogory(e.target.value)}
              placeholder="Enter Title of Product"
            />
            <input
              type="number"
              id="user-amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Cost of Product"
            />
            <button class="submit" id="check-amount" onClick={handleExpense}>Check Amount</button>
          </div>
        </div>
        
        <div class="output-container flex-space">
          <button class="submit" id="total-amount-button" onClick={handleTotal}>calculate</button>
          <div>
            <p>Total Budget</p>
            <span id="amount">0</span>
          </div>
          <div>
            <p>Expenses</p>
            <span id="expenditure-value">0</span>
          </div>
          <div>
            <p>Balance</p>
            <span id="balance-amount">0</span>
          </div>
        </div>
      </div>
      <button class="submit" id="check-amount" >view today expense</button>
     
    </div>
   
  </body>
</html>
    
       
    )
 }
 export default Dashboard;

 