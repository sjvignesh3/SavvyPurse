import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import ExpenseForm from './ExpenseForm';
function App() {
  return (
    <div>
   
  
   <Routes>
          <Route path ="/" element={<RegisterPage/>}/>
          <Route path = "/registerpage" element={<RegisterPage/>}/>
          <Route path = "/loginpage" element={<LoginPage />}/>
          <Route path = "/expenseform" element={<ExpenseForm/>}/>
  </Routes> 

    </div>
  );
}

export default App;
