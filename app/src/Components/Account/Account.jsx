// Account.jsx

import React, { useState, useEffect } from 'react';
import './Account.css';
import { useNavigate } from 'react-router-dom';
import { getUserInfo, getUserId } from '../../sqldb';
import { currentUser } from '../../App';

const Account = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentid, setStudentId] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user information when the component mounts
    const userId = getUserId(currentUser.getEmail);
    const userInfo = getUserInfo(userId);
    setName(userInfo.name);
    setEmail(userInfo.email);
    setStudentId(userInfo.studentid);
    setPhone(userInfo.phone);
  }, []);

  const handleLogOutClick = () => {
    navigate('/');
  };

  const handleHomeClick = () => {
    navigate('/home');
  };

  return (
    <div className="account-container">
      <h1 className="account-header">{name}'s Account</h1>
      <div className="line"></div>
      <div className="additional-info">
        <p className="info-item">
          <span className="label">Email:</span> {email}
        </p>
        <p className="info-item">
          <span className="label">Student ID:</span> {studentid}
        </p>
        <p className="info-item">
          <span className="label">Phone Number:</span> {phone}
        </p>
        {/* Add other content of the Account page here */}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <button onClick={() => handleHomeClick()} style={{ backgroundColor: '#78B0E8', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px' }}>
          Back to Home
        </button>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
          <button onClick={() => handleLogOutClick()} style={{ backgroundColor: '#DF7070', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px' }}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
