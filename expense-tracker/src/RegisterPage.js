
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import './RegisterPage.css'; 

const RegisterPage = () => {
 
    const [username1, setUsername1] = useState('');
    const [email1, setEmail1] = useState('');
    const [password1, setPassword1] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:4000/insert', {
      uname: username1,
      uemail: email1,
      upass: password1,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    setUsername1('');
    setPassword1('');
    setEmail1('');
   
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username1}
            onChange={(e) => setUsername1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email1}
            onChange={(e) => setEmail1(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        <p>If already Registered...<Link to="/loginpage">Login Here</Link></p>
      </form>
    </div>
  );
};

export default RegisterPage;
