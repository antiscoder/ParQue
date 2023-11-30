// WaitTimeNorth.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WaitTimeNorth.css';

const WaitTimeNorth = () => {
  const navigate = useNavigate();

  const handleJoinQueueClick = () => {
    // Navigate back to the queue page
    navigate('/joinqueue');
  };

  return (
    <div className="wait-time-container">
    <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>Est. Wait Time for North Garage</h1>      
    {/* You can add other content or components here */}
    <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto',fontSize: '100px' }}>TT:TT</h1>    
    <h2 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>Queue Position: ##</h2>        
      <button onClick={handleJoinQueueClick} style={{ backgroundColor: '#DF7070', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px',  marginBottom: '100px'  }}>
        Leave Queue
        </button>
    </div>
  );
};

export default WaitTimeNorth;

