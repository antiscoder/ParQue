// JoinQueue.jsx

import React from 'react';
import './JoinQueue.css';
import { useNavigate } from 'react-router-dom';

const JoinQueue = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home');
  };

  return (
    <div className="JoinQueue">
      <h1 style={{ color: 'white', fontWeight: 'bold', marginBottom: '20px' }}>San Jose State University</h1>
      <h2 style={{ color: 'white', fontWeight: 'bold', marginBottom: '20px', fontStyle: 'italic' }}>Where will you park?</h2>
      {/* Your Join Queue content goes here */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <button onClick={handleHomeClick} style={{ backgroundColor: '#78B0E8', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', width: '500px', marginBottom: '20px' }}>
        San Jose State North
        </button>
        <button onClick={handleHomeClick} style={{ backgroundColor: '#78B0E8', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', width: '500px', marginBottom: '20px' }}>
        San Jose State West
        </button>
        <button onClick={handleHomeClick} style={{ backgroundColor: '#78B0E8', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', width: '500px', marginBottom: '20px'  }}>
        San Jose State South
        </button>
        <button onClick={handleHomeClick} style={{ backgroundColor: '#DF7070', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px',  marginTop: '50px'  }}>
        Back to Home
        </button>
    </div>
    </div>
  );
};

export default JoinQueue;
