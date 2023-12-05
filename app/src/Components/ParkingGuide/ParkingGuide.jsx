// ParkingGuide.jsx

import React, { useState, useEffect } from 'react';
import './ParkingGuide.css';
import { useNavigate } from 'react-router-dom';
import { currentUser, currentStructure, north_parking, south_parking, west_parking } from '../../App';

export const ParkingSpot = (props) => {
  const [spotID, setSpotID] = useState(props.id);
  const [spotOccupied, setSpotOccupied] = useState(props.state);

  const handleSelectSpot = () => {
    let updatedState = spotOccupied;
    if (spotOccupied === 1){
      updatedState = spotOccupied + 1;
    }
    else if (spotOccupied === 2){
      updatedState = spotOccupied - 1;
    }
    
    setSpotOccupied((spotOccupied) => updatedState);
    console.log(spotID);
    console.log(spotOccupied);
  };

  return (
    <td>
      {spotOccupied===0?
        <button onClick={handleSelectSpot} style={{ backgroundColor: '#DF7070', color: 'white', padding: '30px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px'}}>{spotID}</button>:
        spotOccupied===1?
        <button onClick={handleSelectSpot} style={{ backgroundColor: '#9DE592', color: 'white', padding: '30px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', }}>{spotID}</button>:
        <button onClick={handleSelectSpot} style={{ backgroundColor: '#78B0E8', color: 'white', padding: '30px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', }}>{spotID}</button>}
    </td>
  );
};

export const ParkingMap = () => {
  const [spotID, setSpotID] = useState(3);
  const [spotOccupied, setSpotOccupied] = useState(2);
  const spots = [];
  for (let i = 0; i < north_parking.getParkingSpots.length; i++) {
      spots.push(<ParkingSpot key={i} id={i} state={north_parking.getParkingSpots[i]} />);
  }

  var rows = [], size = 4;
    
  while (spots.length > 0){
    rows.push(
      spots.splice(0, size)
    );
    rows.push(<tr></tr>);
  }

  return (
    <table style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>
      {rows}
    </table>
  );
};

const ParkingGuide = () => {
  const navigate = useNavigate();

  const handleParkedClicked = () => {
    navigate('/parkingduration');
  };

  return (
    <div className="parking-guide-container">
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>{currentStructure.getName}</h1>
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>Select and Park</h1>
      {/* Add your parking guide content here */}
      <ParkingMap />
      {/* Add the "I have Parked" button */}
      <button onClick={handleParkedClicked} style={{ backgroundColor: '#78B0E8', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', marginTop: '20px', marginBottom: '20px'}}>
        I Have Parked
      </button>
    </div>
  );
};

export default ParkingGuide;
