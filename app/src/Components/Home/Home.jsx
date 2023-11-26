import React, { useState } from 'react';

const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>
      <h1 style={{ color: 'white', fontWeight: 'bold' }}>ParQue</h1>
      <h2 style={{ color: 'white', fontStyle: 'italic' }}>Welcome, First Last</h2>
      <h3 style={{ color: 'white' }}>Welcome to the Home Page!</h3>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <p style={{ color: 'white', cursor: 'pointer' }} onClick={toggleDropdown}>
          Previous Parking Spots
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <button style={{ backgroundColor: '#78B0E8', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px' }}>
          Join Queue
        </button>
      </div>
      <div style={{ marginRight: '900px', marginTop: '550px' }}>
        <button style={{ backgroundColor: '#DF7070', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px' }}>
          Account
        </button>
      </div>
      {/* Add your home page content here */}
    </div>
  );
};

export default Home;
