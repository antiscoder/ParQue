// ParkingGuide.jsx

import React from 'react';
import './ParkingGuide.css';
import { useNavigate } from 'react-router-dom';

const ParkingGuide = () => {
  const navigate = useNavigate();

  const handleParkedClicked = () => {
    navigate('/parkingduration');
  };

  return (
    <div className="parking-guide-container">
      <h1>Go to zone ##</h1>
      {/* Add your parking guide content here */}
      
      {/* Add the "I have Parked" button */}
      <button onClick={handleParkedClicked} style={{ backgroundColor: '#78B0E8', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', marginTop: '20px' }}>
        I Have Parked
      </button>
    </div>
  );
};

export default ParkingGuide;
