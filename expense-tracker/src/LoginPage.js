import React , {useState} from 'react';
import {Link,useNavigate} from "react-router-dom";

import axios from 'axios';
import './LoginPage.css';
 const LoginPage = ()=>{
  const navigate = useNavigate();

    const [username1, setUsername1] = useState('');
    const [password1, setPassword1] = useState('');
   

    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:4000/login', {
        username1,password1
      })
      .then(function (response) {
        console.log(response.data.message);
        if(response.data.message==='Login successful')
        navigate("/expenseform",{
          state: {
              name: username1
             
          },
      });
       else alert("invalid credentials");
      })
      .catch(function (error) {
        console.log(error);
      });
    
      setUsername1('');
      setPassword1('');
      
    };
    return(
      <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username1}
          onChange={(e) => setUsername1(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>Not Registered yet....<Link to="/registerpage">Register Here</Link></p>
      </form>
      
    </div>
    )
 }
 export default LoginPage;