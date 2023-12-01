// ParkingGuide.jsx

import React from 'react';
import './ParkingGuide.css';

const ParkingGuide = () => {
  return (
    <div className="parking-guide-container">
      <h1>Go to zone ##</h1>
      <div className="join-queue-button">
        <button>I Have Parked</button>
      </div>
      {/* Add your parking guide content here */}
    </div>
  );
};

export default ParkingGuide;
