// WaitTimeNorth.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WaitTimeNorth.css';
import { getUserId } from '../../sqldb';
import { currentUser, north_queue, currentStructure } from '../../App';

const WaitTimeNorth = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [timerExpired, setTimerExpired] = useState(false); // New state variable

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
          // Timer has expired
          setIsRunning(false);
          setTimerExpired(true);
        }
      }, 10);
    }
    return () => clearInterval(interval);
  }, [milliseconds, seconds, minutes, isRunning]);

  const navigate = useNavigate();
  const userId = getUserId(currentUser.getEmail);

  const handleLeaveQueueClick = () => {
    // Remove user from the north_queue
    const index = north_queue.indexOf(userId);
    if (index !== -1) {
      north_queue.splice(index, 1);
    }
    // Navigate to the home page or another appropriate location
    navigate('/home');
  };

  const handleReadyToParkClick = () => {
    // Handle the "Ready to Park" action
    currentStructure.setName = "north_parking";
    navigate('/parkingguide');
    console.log(currentStructure.getName);
  };

  const handleHomeClick = () => {
    navigate('/home');
  }

  return (
    <div className="wait-time-container">
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>North Garage</h1>
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', fontSize: '60px', textDecorationLine: 'underline' }}>Est Wait Time</h1>
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', fontSize: '100px' }}>{minutes} mins, {seconds} seconds </h1>
      <h2 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>Queue Position: {north_queue.length}</h2>

      {/* Conditionally render the button based on the timer state */}
      {timerExpired ? (
        <button onClick={handleReadyToParkClick} style={{ backgroundColor: '#9DE592', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', marginBottom: '100px' }}>
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

export default WaitTimeNorth;
