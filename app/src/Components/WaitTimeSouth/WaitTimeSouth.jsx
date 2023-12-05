// WaitTimeSouth.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WaitTimeSouth.css';
import { currentUser, south_queue, currentStructure } from '../../App';
import { getUserId } from '../../sqldb';


const WaitTimeSouth = () => {
  const [minutes, setMinutes] = useState(south_queue.length);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [timerExpired, setTimerExpired] = useState(false);

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
        } else {
          setIsRunning(false);
          setTimerExpired(true);
        }
      }, 10); // Set interval to 1000 milliseconds for a 1-second countdown
    }
    return () => clearInterval(interval);
  }, [milliseconds, seconds, minutes, isRunning]);

  const navigate = useNavigate();
  const userId = getUserId(currentUser.getEmail);

  const handleLeaveQueueClick = () => {
    const index = south_queue.indexOf(userId);
    if (index !== -1) {
      south_queue.splice(index, 1);
    }
    navigate('/home');
  };

  const handleReadyToParkClick = () => {
    currentStructure.setName = "south_parking";
    navigate('/parkingguide');
    console.log(currentStructure.getName);
  };

  const handleHomeClick = () => {
    navigate('/home');
  }

  return (
    <div className="wait-time-container">
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>South Garage</h1>
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', fontSize: '60px', textDecorationLine: 'underline' }}>Est Wait Time</h1>
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', fontSize: '100px' }}>{minutes} mins, {seconds} seconds </h1>
      <h2 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>Queue Position: {south_queue.length}</h2>

      {timerExpired ? (
        <button onClick={handleReadyToParkClick} style={{ backgroundColor: 'green', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', marginBottom: '100px' }}>
          Ready to Park
        </button>
      ) : (
        <button onClick={handleLeaveQueueClick} style={{ backgroundColor: '#DF7070', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', marginBottom: '100px' }}>
          Leave Queue
        </button>
      )}
      <button onClick={handleHomeClick} style={{ backgroundColor: '#78B0E8', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', marginBottom: '100px' }}>
          Back To Home
      </button>
    </div>
  );
};

export default WaitTimeSouth;
