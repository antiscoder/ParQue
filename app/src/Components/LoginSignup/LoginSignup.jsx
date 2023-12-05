import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import phone_icon from '../Assets/phone.png';
import id_icon from '../Assets/id.png';
import { addUser, containsEmail, loginAuth } from '../../sqldb';
import { currentUser } from '../../App';


export const LoginSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [action, setAction] = useState("Login");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUpClick = () => {
    // Use navigate to go to the sign-up page
    if(action === "Sign Up" && name !== "" && email !== "" && studentId !== "" && phoneNumber !== "" && password !== ""){
      addUser(name, email, studentId, phoneNumber, password);
      setAction("Login");
    }
    else if(action === "Login"){
      setAction("Sign Up");
    }
    else{
      window.alert("Please enter all information!");
    }
    setName("");
    setEmail("");
    setPassword("");
    setStudentId("");
    setPhoneNumber("");
    
    
  };

  const handleLoginClick = () => {
    // Use navigate to go to the login page
    console.log(loginAuth(email, password));
      if (loginAuth(email, password)){
        currentUser.setEmail = email;
        navigate('/home');
        console.log(currentUser.getEmail);
      }
      else if(action === "Sign Up"){
        setAction("Login");
      }
      else {
        window.alert("Incorrect Email or Password");
      }
      setName("");
      setEmail("");
      setPassword("");
      setStudentId("");
      setPhoneNumber("");
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
  const studentIdChange = event => {
    setStudentId(event.target.value)
  };
  const phoneNumberChange = event => {
    setPhoneNumber(event.target.value)
  };

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={email_icon} alt="" />
                <input onChange={emailChange} value = {email} type="email" placeholder="Email"/>
            </div>
            {action==="Login"?<div></div>:
            <React.Fragment>
              <div className="input">
                  <img src={user_icon} alt="" />
                  <input onChange={nameChange} value = {name} type="text" placeholder="Name"/>
              </div>
              <div className="input">
                  <img src={id_icon} alt="" />
                  <input onChange={studentIdChange} value = {studentId} type="text" placeholder="Student ID"/>
              </div>
              <div className="input">
                  <img src={phone_icon} alt="" />
                  <input onChange={phoneNumberChange} value = {phoneNumber} type="text" placeholder="Phone Number"/>
              </div>
            </React.Fragment>
            }
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

