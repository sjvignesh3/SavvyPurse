import React,{useState} from 'react';
import axios from 'axios';
const LoginSignup = () => {

  const[email,setEmail]=useState('');
  const[pass,setPass]=useState('');
  const[newUserEmail,setNewUserEmail]=useState('');
  const[newUserPassword1,setNewUserPassword1]=useState('');
  const[newUserPassword2,setNewUserPassword2]=useState('');
  const [userError, setUserError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Send data to server
    if(newUserEmail===""||newUserPassword1==="") {
      setUserError('Fill all the required field');
      //alert("");
      return;
    }
    
    axios.post('http://localhost:4000/login', {newUserEmail,newUserPassword1})
      .then(function (response) {
        console.log(response);
        setUserError('');
        const loginDisplay=JSON.stringify(response.data);
        setUserError(loginDisplay);
      })
      .catch(function (error) {
        console.log(error);
      });
     setNewUserEmail('');
     setNewUserPassword1('');
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    if(newUserEmail===""||newUserPassword1===""||newUserPassword2==="") {
      setUserError('Fill all the required field');
      return;
    }
    if(newUserPassword1!==newUserPassword2){
      setUserError('Passwords does not match');
      return;
    }

     axios.post('http://localhost:4000/insert', {
      // new_email1: newUserEmail,
      // new_password1: newUserPassword1,
      // new_password2:newUserPassword2,
      newUserEmail,newUserPassword1,newUserPassword2,
    })
    .then(function (response) {
      console.log(response);
      setUserError('');
      const signupDisplay=JSON.stringify(response.data);
      setUserError(signupDisplay);
    })
    .catch(function (error) {
      console.log(error);
    });
     setNewUserEmail('');
     setNewUserPassword1('');
     setNewUserPassword2('');
  }

    return (
        <div >
<head>
 
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  
  <title>Login & Registration Form</title>

  <link rel="stylesheet" href="style.css"/>
</head>
<body>
  <div class="container">
    <input type="checkbox" id="check"/>
    <div class="login form">
      <header>Login</header>
      <form >
        <input type="email" placeholder="Enter your email" value={newUserEmail} onChange={(e) => setNewUserEmail(e.target.value)} />
        <input type="password" placeholder="Enter your password" value={newUserPassword1} onChange={(e) => setNewUserPassword1(e.target.value)}/>
        <a href="#">Forgot password?</a>
        {userError && <span style={{ color: 'red', fontSize: '14px' }}>{userError}</span>}
        <input type="button" class="button" value="Login" onClick={handleLogin}/>
      </form>
      <div class="signup">
        <span class="signup">Don't have an account?
         <label for="check">Signup</label>
        </span>
      </div>
    </div>
    <div class="registration form">
      <header>Signup</header>
      <form>
        <input type="text" placeholder="Enter your email" value={newUserEmail}
        onChange={(e) => setNewUserEmail(e.target.value)}/>
        <input type="password" placeholder="Create a password" value={newUserPassword1}
        onChange={(e) => setNewUserPassword1(e.target.value)}/>
        <input type="password" placeholder="Confirm your password" value={newUserPassword2}
        onChange={(e) => setNewUserPassword2(e.target.value)}/>
        <input type="button" class="button" value="Signup"  onClick={handleSignup}/>
      </form>
      <div class="signup">
        <span class="signup">Already have an account?
         <label for="check">Login</label>
        </span>
      </div>
    </div>
  </div>
</body>
</div>
    )
}
export default LoginSignup;