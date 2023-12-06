// Home.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getUserInfo, getUserId } from '../../sqldb';
import { currentStructure, currentUser } from '../../App';

const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [remainingTime, setRemainingTime] = useState(null);
  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Fetch user information when the component mounts
    const userId = getUserId(currentUser.getEmail);
    const userInfo = getUserInfo(userId);
    setName(userInfo.name);

    // Set the remaining time and selected duration from the state
    setRemainingTime(location.state?.remainingTime);

    // Log the selected duration passed from the previous component
    console.log('Remaining Time:', location.state?.remainingTime);

    // Update the timer every second
    const intervalId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prev) => prev - 1);
        setTimer((prev) => {
          const hours = Math.floor(remainingTime / 3600);
          const minutes = Math.floor((remainingTime % 3600) / 60);
          const seconds = remainingTime % 60;
          return { hours, minutes, seconds };
        });
      } else {
        clearInterval(intervalId);
        // Optionally, you can perform additional actions when the timer reaches 0
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [location.state, remainingTime]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleAccountClick = () => {
    navigate('/account');
  };

  const handleJoinQueueClick = () => {
    navigate('/joinQueue');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>
      <h1 style={{ color: 'white', fontWeight: 'bold' }}>ParQue</h1>
      <h2 style={{ color: 'white', fontStyle: 'italic' }}>Welcome, {name} </h2>
      <h3 style={{ color: 'white' }}>Welcome to the Home Page!</h3>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ color: 'white', cursor: 'pointer' }} onClick={toggleDropdown}>
          Previous Parking Spots ▼
        </p>
        {showDropdown && (
          <div style={{ marginLeft: '20px' }}>
            {/* Add dropdown content here */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{ color: 'gray', marginRight: '10px', fontSize: '16px' }}>2023-11-24</p>
              <p style={{ color: 'gray', fontSize: '16px' }}>Parking Spot 1</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{ color: 'gray', marginRight: '10px', fontSize: '16px' }}>2023-11-23</p>
              <p style={{ color: 'gray', fontSize: '16px' }}>Parking Spot 2</p>
            </div>
            {/* Add more parking spots with dates as needed */}
          </div>
        )}
      </div>
      {/* Display remaining time if available and greater than 0 */}
      {remainingTime !== null && remainingTime > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
          <h3 style={{ color: 'white' }}>
            {currentStructure.getName}
          </h3>
          <h3 style={{ color: 'white' }}>
            Remaining Time: {`${String(timer.hours).padStart(2, '0')} : ${String(timer.minutes).padStart(2, '0')} : ${String(timer.seconds).padStart(2, '0')}`}
          </h3>
        </div>
      )}
      {/* Join Queue button always visible */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <button onClick={handleJoinQueueClick} style={{ backgroundColor: '#78B0E8', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px' }}>
          Join Queue
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleAccountClick} style={{ backgroundColor: '#DF7070', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px' }}>
          Account
        </button>
      </div>
      {/* Add your home page content here */}
    </div>
  );
};

export default Home;
