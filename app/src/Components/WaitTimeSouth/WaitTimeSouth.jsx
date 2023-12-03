// WaitTimeSouth.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WaitTimeSouth.css';
import {south_queue} from '../../App';

const WaitTimeSouth= () => {
  const [minutes, setMinutes] = useState(south_queue.length);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (milliseconds > 0) {
          setMilliseconds((milliseconds) => milliseconds - 1);
        } else if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
          setMilliseconds(99);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
          setMilliseconds(99);
        } 
      }, 10);
    }
    return () => clearInterval(interval);
  }, [milliseconds, seconds, minutes, isRunning]);

  const navigate = useNavigate();

  const handleJoinQueueClick = () => {
    // Navigate back to the queue page
    navigate('/joinqueue');
  };

  return (
    <div className="wait-time-container">
    <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>Est. Wait Time for South Garage</h1>      
    {/* You can add other content or components here */}
    <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto',fontSize: '100px' }}>{minutes}:{seconds}</h1>    
    <h2 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>Queue Position: {south_queue.length}</h2>        
      <button onClick={handleJoinQueueClick} style={{ backgroundColor: '#DF7070', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px',  marginBottom: '100px'  }}>
        Leave Queue
        </button>
    </div>
  );
};

export default WaitTimeSouth;