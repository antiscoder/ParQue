// JoinQueue.jsx

import React, { useState } from 'react';
import './JoinQueue.css';
import { useNavigate } from 'react-router-dom';
import { getUserId } from '../../sqldb';
import { currentUser, north_queue, west_queue, south_queue } from '../../App';
const JoinQueue = () => {

  const [queue, setQueue] = useState("");

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home');
  };

  const userId = getUserId(currentUser.getEmail);
  console.log(currentUser.getEmail);
  console.log('User ID:', userId);
  
  //if (userId !== undefined) {
    //addUserToQueue('north_queue', userId);
    //console.log('Queue after adding user:', getQueue('north_queue'));
    //setQueue(getQueue('north_queue'));
    //navigate('./waittimenorth');
  //}
  
  const handleNorthClick = async () => {
    const userId = getUserId(currentUser.getEmail); // Get the user ID (implement this function)
    north_queue.push(userId); // Add user to the north_queue (implement this function)
    //setQueue(await getQueue('north_queue')); // Get the updated north_queue (implement this function)
    navigate('./waittimenorth');
  };

  const handleWestClick = async () => {
    const userId = getUserId(currentUser.getEmail); // Get the user ID
    west_queue.push(userId); // Add user to the west_queue
    //setQueue(await getQueue('west_queue')); // Get the updated west_queue
    navigate('./waittimewest');
  };

  const handleSouthClick = async () => {
    const userId = getUserId(currentUser.getEmail); // Get the user ID
    south_queue.push(userId); // Add user to the south_queue
    //setQueue(await getQueue('south_queue')); // Get the updated south_queue
    navigate('./waittimesouth');
  };

  return (
    <div className="JoinQueue">
      <h1 style={{ color: 'white', fontWeight: 'bold', marginBottom: '20px' }}>San Jose State University</h1>
      <h2 style={{ color: 'white', fontWeight: 'bold', marginBottom: '20px', fontStyle: 'italic' }}>Where will you park?</h2>
      {/* Your Join Queue content goes here */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <button onClick={handleNorthClick} style={{ backgroundColor: '#78B0E8', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', width: '500px', marginBottom: '20px' }}>
        San Jose State North
        </button>
        <button onClick={handleWestClick} style={{ backgroundColor: '#78B0E8', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', width: '500px', marginBottom: '20px' }}>
        San Jose State West
        </button>
        <button onClick={handleSouthClick} style={{ backgroundColor: '#78B0E8', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px', width: '500px', marginBottom: '20px'  }}>
        San Jose State South
        </button>
        <button onClick={handleHomeClick} style={{ backgroundColor: '#DF7070', color: 'white', padding: '15px', border: 'none', cursor: 'pointer', borderRadius: '5px', fontSize: '16px',  marginTop: '50px'  }}>
        Back to Home
        </button>
    </div>
    </div>
  );
};

export default JoinQueue;
