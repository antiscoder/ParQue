import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { addUser, containsEmail, loginAuth } from '../../sqldb';


export const LoginSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [action, setAction] = useState("Login");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUpClick = () => {
    // Use navigate to go to the sign-up page
    if(action === "Sign Up" && name !== "" && email !== "" && password !== ""){
      addUser(name, email, password);
      setName("");
      setEmail("");
      setPassword("");
      setAction("Login");
    }
    else if(action === "Login"){
      setName("");
      setEmail("");
      setPassword("");
      setAction("Sign Up");
    }
    
  };

  const handleLoginClick = () => {
    // Use navigate to go to the login page
    console.log(loginAuth(email, password));
    if(action === "Login" && email !== "" && password !== ""){
      if (loginAuth(email, password)){
        navigate('/home');
      }
      else{
        window.alert("Incorrect Email or Password");
      }
    }
    else if(action === "Sign Up"){
      setAction("Login");
    }
    setName("");
    setEmail("");
    setPassword("");
  };

  const nameChange = event => {
    setName(event.target.value)
  };
  const emailChange = event => {
    setEmail(event.target.value)
  };
  const passwordChange = event => {
    setPassword(event.target.value)
  };

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input onChange={nameChange} value = {name} type="text" placeholder="Name"/>
            </div>}
            <div className="input">
                <img src={email_icon} alt="" />
                <input onChange={emailChange} value = {email} type="email" placeholder="Email"/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input onChange={passwordChange} value = {password} type="password" placeholder="Password"/>
            </div>
        </div>
{/* Render the "Forgot Password? Click Here" container on the Login page */}
{action === "Login" ? (
  <div className="forgot-password" onClick={() => setAction("Sign Up")}>
    Need an account? <span>Click Here</span>
  </div>
) : null}

{/* Render the "Already have an account? Login here" container on the Sign Up page */}
{action === "Sign Up" ? (
  <div className="login-here" onClick={() => setAction("Login")}>
    Already have an account? <span>Login here</span>
  </div>
) : null}
        <div className="submit-container">
          {action==="Sign Up"?
            <div className="submit" onClick={()=>{handleSignUpClick()}}>Sign Up</div>:
            <div className="submit" onClick={()=>{handleLoginClick()}}>Login</div>}
        </div>
    </div>
  )
}

