// WaitTimeNorth.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WaitTimeNorth.css';
import { north_queue } from '../../App';

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

  const handleJoinQueueClick = () => {
    // Navigate back to the queue page
    navigate('/joinqueue');
  };

  const handleReadyToParkClick = () => {
    // Handle the "Ready to Park" action
    // This could include any logic you need when the user is ready to park
    navigate('/parkingguide');
  };

  return (
    <div className="wait-time-container">
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>North Garage</h1>
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', fontSize: '100px' }}>Estimated Waiting Time</h1>
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', fontSize: '100px' }}>{minutes} mins, {seconds} secs </h1>
      <h2 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>Queue Position: {north_queue.length}</h2>

      {/* Conditionally render the button based on the timer state */}
      {timerExpired ? (
        <button onClick={handleReadyToParkClick} style={{ backgroundColor: 'green', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', marginBottom: '100px' }}>
          Ready to Park
        </button>
      ) : (
        <button onClick={handleJoinQueueClick} style={{ backgroundColor: '#DF7070', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', marginBottom: '100px' }}>
          Leave Queue
        </button>
      )}
    </div>
  );
};

export default WaitTimeNorth;
