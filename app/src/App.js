// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
import Home from './Components/Home/Home'; // Import the Home component
import Account from './Components/Account/Account';
import { createUsersTable } from './sqldb';

createUsersTable();


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Sign-up route */}
        <Route path="/sign-up" element={<LoginSignup />} />

        {/* Login route */}
        <Route path="/login" element={<LoginSignup />} />

        {/* Account route */}
        <Route path="/account" element={<Account />} />
      
      </Routes>
    </Router>
  );
};

export default App;
