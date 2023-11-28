// Account.jsx

import React from 'react';
import './Account.css';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();

  const handleLogOutClick = () => {
    navigate('/');
  
  };
  return (
    <div className="account-container">
      <h1 className="account-header">Account</h1>
      <h3 className="subheader">First Last</h3>
      <div className="line"></div>
      <div className="additional-info">
        <p className="info-item">
          <span className="label">Username:</span> admin@sjsu.edu
        </p>
        <p className="info-item">
          <span className="label">Student ID:</span> 012345678
        </p>
        <p className="info-item">
          <span className="label">Phone Number:</span> (408) 123-4567
        </p>
        <p className="info-item">
          <span className="label">Password:</span> ********
        </p>
        {/* Add other content of the Account page here */}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <button onClick={()=>{handleLogOutClick()}} style={{ backgroundColor: '#DF7070', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px' }}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Account;
