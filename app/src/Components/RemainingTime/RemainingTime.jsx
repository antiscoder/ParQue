import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './RemainingTime.css';

const RemainingTime = () => {
  const navigate = useNavigate();
  const { selectedDuration } = useParams();
  const [remainingMinutes, setRemainingMinutes] = useState(parseInt(selectedDuration) || 0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    let interval;

    if (remainingMinutes > 0 || remainingSeconds > 0) {
      interval = setInterval(() => {
        // your countdown logic here
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [remainingMinutes, remainingSeconds]);

  const handleExtendTime = () => {
    navigate('/parkingduration');
  };

  const handleHomeClick = () => {
    // Navigate back to the home page
    navigate('/home');
  };

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
