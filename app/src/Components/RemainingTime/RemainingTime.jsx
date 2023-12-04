import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './RemainingTime.css';

const RemainingTime = () => {
  const navigate = useNavigate();
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  const handleExtendTime = () => {
    navigate('/parkingduration');
  };

  const handleHomeClick = () => {
    // Navigate back to the home page
    navigate('/home');
  };

  const { selectedDuration } = useParams();
  const [remainingMinutes, setRemainingMinutes] = useState(parseInt(selectedDuration) || 0);
  
  useEffect(() => {
    let interval;
  
    // Initialize remainingMinutes from the route parameter
    setRemainingMinutes(parseInt(selectedDuration) || 0);
  
    if (remainingMinutes > 0 || remainingSeconds > 0) {
      interval = setInterval(() => {
        if (remainingSeconds === 0) {
          setRemainingMinutes((prev) => Math.max(prev - 1, 0));
          setRemainingSeconds(59);
        } else {
          setRemainingSeconds((prev) => prev - 1);
        }
      }, 1000);
    }
  
    return () => clearInterval(interval);
  }, [selectedDuration, remainingMinutes, remainingSeconds]);
  
  
  return (
    <div className="wait-time-container">
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>
        Remaining Time Left
      </h1>
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto', fontSize: '100px' }}>
        {`${String(remainingMinutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`}
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
        Extend Time
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
