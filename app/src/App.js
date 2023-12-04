// App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
import Home from './Components/Home/Home';
import Account from './Components/Account/Account';
import JoinQueue from './Components/JoinQueue/JoinQueue';
import WaitTimeNorth from './Components/WaitTimeNorth/WaitTimeNorth';
import WaitTimeWest from './Components/WaitTimeWest/WaitTimeWest';
import WaitTimeSouth from './Components/WaitTimeSouth/WaitTimeSouth';
import RemainingTime from './Components/RemainingTime/RemainingTime';
import ParkingGuide from './Components/ParkingGuide/ParkingGuide';
import ParkingDuration from './Components/ParkingDuration/ParkingDuration';
import { createUsersTable } from './sqldb';

createUsersTable();

export let north_queue = [44, 55, 33];

export let west_queue = [44, 55, 33];

export let south_queue = [44, 55, 33];

export function addUserToQueue(queueName, userID) {
  queueName.push(userID);
}

export let currentUser = {
  email: '',
  set setEmail(newEmail){
    this.email = newEmail;
  },
  get getEmail(){
    return this.email;
  }
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<LoginSignup />} />

        {/* Home route */}
        <Route path="/home" element={<Home />} />

        {/* Login route */}
        <Route path="/login" element={<LoginSignup />} />

        {/* Account route */}
        <Route path="/account" element={<Account />} />

        {/* Join Queue route */}
        <Route path="/joinqueue" element={<JoinQueue />} />

        {/* Nested route for Wait Time North (relative path) */}
        <Route path="/joinqueue/waittimenorth" element={<WaitTimeNorth />} />

        {/* Nested route for Wait Time West (relative path) */}
        <Route path="/joinqueue/waittimewest" element={<WaitTimeWest />} />

        {/* Nested route for Wait Time South (relative path) */}
        <Route path="/joinqueue/waittimesouth" element={<WaitTimeSouth />} />

        {/* This route may need to be updated based on the final route */}
        <Route path="/remainingtime/:selectedDuration" element={<RemainingTime />} />

        {/* This route may need to be updated based on the final route */}
        <Route path="/parkingguide" element={<ParkingGuide />} />

        {/* This route may need to be updated based on the final route */}
        <Route path="/parkingduration" element={<ParkingDuration />} />


      </Routes>
    </Router>
  );
};
export default App;
