// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
import Home from './Components/Home/Home'; // Import the Home component
import Account from './Components/Account/Account';
import JoinQueue from './Components/JoinQueue/JoinQueue';
import { createUsersTable } from './sqldb';

createUsersTable();

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
      </Routes>
    </Router>
  );
};

export default App;
