import React, { useState, useEffect } from 'react';
import './ParkingDuration.css';
import { useNavigate } from 'react-router-dom';

const ParkingGuide = () => {
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        // your countdown logic here
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleSetDuration = () => {
    const selectedDuration = parseInt(selectedHour) * 60 + parseInt(selectedMinute);
    console.log("Selected Duration:", selectedDuration);
    setIsRunning(true);
    navigate(`/remainingtime/${selectedDuration}`);
  };
  
  

  const renderOptions = (maxValue, step = 1) => {
    const options = [];
    for (let i = 0; i <= maxValue; i += step) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <div className="parking-guide-container">
      <h1>Parking Duration</h1>
      <div className="set-duration-container">
        <label htmlFor="hourInput">Select Hour: </label>
        <select
          id="hourInput"
          value={selectedHour}
          onChange={(e) => setSelectedHour(e.target.value)}
        >
          {renderOptions(12)}
        </select>

        <label htmlFor="minuteInput">Select Minute: </label>
        <select
          id="minuteInput"
          value={selectedMinute}
          onChange={(e) => setSelectedMinute(e.target.value)}
        >
          {renderOptions(60, 15)}
        </select>
      </div>

      <div className="set-duration-button-container">
        <button
          onClick={handleSetDuration}
          style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '15px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
            fontSize: '16px',
            marginTop: '10px',
          }}
        >
          Set Duration
        </button>
      </div>
    </div>
  );
};

export default ParkingGuide;
