// WaitTimeSouth.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WaitTimeSouth.css';
import { currentUser, south_queue, currentStructure } from '../../App';
import { getUserId } from '../../sqldb';


const WaitTimeSouth = () => {
  const [minutes, setMinutes] = useState(south_queue.length - 1);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(south_queue.length);
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

          // Decrement the queue position after every minute
          if (currentPosition > 0) {
            setCurrentPosition((currentPosition) => currentPosition - 1);
          }
        } else {
          // Timer has expired
          if (currentPosition > 0) {
            setCurrentPosition((currentPosition) => currentPosition - 1);
          }
          setIsRunning(false);
          setTimerExpired(true);
        }
      }, 10);
    }
    return () => clearInterval(interval);
  }, [milliseconds, seconds, minutes, isRunning, currentPosition]);

  const navigate = useNavigate();
  const userId = getUserId(currentUser.getEmail);

  const handleLeaveQueueClick = () => {
    const index = south_queue.indexOf(userId);
    if (index !== -1) {
      south_queue.splice(index, 1);
    }
    console.log('User successfully left the queue');
    navigate('/joinqueue');
  };

  const handleReadyToParkClick = () => {
    currentStructure.setName = "south_parking";
    navigate('/parkingguidesouth');
    console.log(currentStructure.getName);
  };

  const handleHomeClick = () => {
    navigate('/home');
  }

  return (
    <div className="wait-time-container">
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>South Garage</h1>
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', fontSize: '60px', textDecorationLine: 'underline' }}>Est Wait Time</h1>
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', fontSize: '100px' }}>{String(minutes).padStart(2, '0')} : {String(seconds).padStart(2, '0')}</h1>
      <h2 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>Queue Position: {currentPosition + 1}</h2>

      {timerExpired ? (
        <button onClick={handleReadyToParkClick} style={{ backgroundColor: '#9DE592', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', marginBottom: '10px' }}>
          Ready to Park
        </button>
      ) : (
        <button onClick={handleLeaveQueueClick} style={{ backgroundColor: '#DF7070', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', marginBottom: '10px' }}>
          Leave Queue
        </button>
      )}
      <button onClick={handleHomeClick} style={{ backgroundColor: '#78B0E8', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', marginBottom: '150px' }}>
          Back To Home
      </button>
    </div>
  );
};

export default WaitTimeSouth;
