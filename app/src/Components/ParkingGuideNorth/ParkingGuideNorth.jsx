// ParkingGuide.jsx

import React, { useState, useEffect } from 'react';
import './ParkingGuideNorth.css';
import { useNavigate } from 'react-router-dom';
import { currentUser, currentStructure, north_parking } from '../../App';

export const ParkingSpot = (props) => {
  const [spotID, setSpotID] = useState(props.id);
  const [spotOccupied, setSpotOccupied] = useState(props.state);

  const handleSelectSpot = () => {
    let updatedState = spotOccupied;
    updatedState = spotOccupied + 1;
    
    setSpotOccupied((spotOccupied) => updatedState);
    north_parking.toggleSpotOccupied(spotID);
    console.log(spotID);
    console.log(spotOccupied);
    console.log(north_parking.getParkingSpots);
  };

  const handleDeselectSpot = () => {
    let updatedState = spotOccupied;
    updatedState = spotOccupied - 1;
    
    setSpotOccupied((spotOccupied) => updatedState);
    north_parking.toggleSpotOccupied(spotID);
    console.log(spotID);
    console.log(spotOccupied);
    console.log(north_parking.getParkingSpots);
  };

  return (
    <td>
      {spotOccupied===0?
        <button style={{ backgroundColor: '#DF7070', color: 'white', padding: '30px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px'}}>{spotID}</button>:
        spotOccupied===1?
        <button onClick={handleSelectSpot} style={{ backgroundColor: '#9DE592', color: 'white', padding: '30px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', }}>{spotID}</button>:
        <button onClick={handleDeselectSpot} style={{ backgroundColor: '#78B0E8', color: 'white', padding: '30px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', }}>{spotID}</button>}
    </td>
  );
};

export const ParkingMap = () => {
  const spots = [];
  for (let i = 0; i < north_parking.getParkingSpots.length; i++) {
    spots.push(<ParkingSpot key={i} id={i} state={north_parking.getParkingSpots[i]} />);
  }

  var rows = [], size = 4;
    
  while (spots.length > 0){
    rows.push(
      spots.splice(0, size)
    );
    rows.push(<tr key={rows.length}></tr>);
  }

  return (
    <table style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>
      {rows}
    </table>
  );
};

const ParkingGuideNorth = () => {
  const navigate = useNavigate();
  const [parkingSpots, setParkingSpots] = useState(north_parking.getParkingSpots);
  const [initialParkingSpots, setInitialParkingSpots] = useState([]);

  useEffect(() => {
    // Log the initial parking spots array when the component mounts
    setInitialParkingSpots([...north_parking.getParkingSpots]);
  }, []);

   const handleParkedClicked = () => {
    // Get the count of 1s in the current state
    const countBefore = initialParkingSpots.reduce((count, spot) => count + (spot === 1 ? 1 : 0), 0);

    // Get the count of 1s in the updated state
    const countAfter = north_parking.getParkingSpots.reduce((count, spot) => count + (spot === 1 ? 1 : 0), 0);

    // Check if exactly one spot changed from 1 to 0
    if (countBefore === countAfter + 1) {
      console.log("Parking spots have changed:", north_parking.getParkingSpots);
      navigate('/parkingdurationnorth');
    } else {
      alert('Please select exactly one parking spot before clicking "I Have Parked".');
    }
  };
  
  return (
    <div className="parking-guide-container">
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>{currentStructure.getName}</h1>
      <h1 style={{ alignSelf: 'flex-start', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto' }}>Select and Park</h1>
      {/* Add your parking guide content here */}
      <ParkingMap />
      {/* Add the "I have Parked" button */}
      <button onClick={handleParkedClicked} style={{ backgroundColor: '#78B0E8', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', marginTop: '20px', marginBottom: '150px'}}>
        I Have Parked
      </button>
    </div>
  );
};

export default ParkingGuideNorth;

