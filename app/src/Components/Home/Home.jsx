// Home.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getUserInfo, getUserId } from '../../sqldb';
import { currentStructure, currentUser } from '../../App';
import parque from '../Assets/parque.png';

const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [remainingTime, setRemainingTime] = useState(location.state?.remainingTime);
  const [hours, setHours] = useState(Math.floor(remainingTime / 3600));
  const [minutes, setMinutes] = useState(Math.floor((remainingTime % 3600) / 60));
  const [seconds, setSeconds] = useState(remainingTime % 60);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const userId = getUserId(currentUser.getEmail);
    const userInfo = getUserInfo(userId);
    setName(userInfo.name);

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
  }, [milliseconds, seconds, minutes, hours, isRunning]);

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
      <img src={parque} alt="" />
      <h2 style={{ color: 'white', fontStyle: 'italic' }}>Welcome, {name} </h2>
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
        <div style={{ display: 'flex', backgroundColor: 'white', borderRadius: '20px', flexDirection: 'column', alignItems: 'center', marginTop: '20px', padding: '0px 30px 0px 30px'}}>
          <h3 style={{ color: '#444660' }}>
            {currentStructure.getName}
          </h3>
          <h3 style={{ color: '#444660' }}>
            Remaining Time: {`${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`}
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
