import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const LoginSignup = () => {

const [action,setAction] = useState("Sign Up");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Name"/>
            </div>}
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="Email"/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Password"/>
            </div>
        </div>
{/* Render the "Forgot Password? Click Here" container on the Login page */}
{action === "Login" ? (
  <div className="forgot-password">
    Forgot Password? <span>Click Here</span>
  </div>
) : null}

{/* Render the "Already have an account? Login here" container on the Sign Up page */}
{action === "Sign Up" ? (
  <div className="login-here" onClick={() => setAction("Login")}>
    Already have an account? <span>Login here</span>
  </div>
) : null}
        <div className="submit-container">
            <div className={action==="Login"?"submit grey":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit grey":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}
