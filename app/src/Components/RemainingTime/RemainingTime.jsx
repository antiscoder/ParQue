// RemainingTime.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './RemainingTime.css';

const RemainingTime = () => {
  const navigate = useNavigate();

  const { selectedDuration } = useParams();

  const [hours, setHours] = useState(Math.floor((parseInt(selectedDuration) || 0) / 60));
  const [minutes, setMinutes] = useState((parseInt(selectedDuration) || 0) % 60);
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);
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
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
          setMilliseconds(99);
        }
      }, 10);
    }

    return () => clearInterval(interval);
  }, [selectedDuration, milliseconds, seconds, minutes, hours]);

  const handleExtendTime = () => {
    navigate('/parkingduration');
  };

const handleHomeClick = () => {
  const selectedDuration = parseInt(selectedHour) * 60 + parseInt(selectedMinute);
  // Pass remainingTime and selectedDuration to Home.jsx when navigating back to home
  navigate('/home', {
    state: {
      remainingTime: seconds + minutes * 60 + hours * 3600,
      selectedDuration: selectedDuration,
    },
  });
};



  return (
    <div className="wait-time-container">
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>
        Remaining Time Left
      </h1>
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', fontSize: '100px' }}>
        {`${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`}
      </h1>
      <button
        onClick={handleExtendTime}
        style={{
          backgroundColor: '#78B0E8',
          color: 'white',
          padding: '15px',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '5px',
          fontSize: '16px',
          marginBottom: '10px',
          width: '300px',
        }}
      >
        Edit Time
      </button>
      <button
  onClick={handleHomeClick}
  style={{
    backgroundColor: '#DF7070',
    color: 'white',
    padding: '15px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
    marginBottom: '100px',
  }}
>
  Back to Home
</button>

    </div>
  );
};

export default RemainingTime;
