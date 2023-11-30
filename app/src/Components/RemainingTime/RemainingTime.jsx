// RemainingTime.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RemainingTime.css';

const RemainingTime = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    // Navigate back to the queue page
    navigate('/home');
  };

  return (
    <div className="wait-time-container">
    <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>Remaining Time Left</h1>      
    {/* You can add other content or components here */}
    <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto',fontSize: '100px' }}>TT:TT</h1>    
    <button onClick={handleHomeClick} style={{ backgroundColor: '#78B0E8', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px',  marginBottom: '10px', width: '300px'  }}>
        Extend Time
        </button>      <button onClick={handleHomeClick} style={{ backgroundColor: '#DF7070', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px',  marginBottom: '100px'}}>
        Back to Home
        </button>
    </div>
  );
};

export default RemainingTime;