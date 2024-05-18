// app/password/page.tsx
"use client"
import React, { useState } from 'react';
import Banner from '../components/restrictedpage/Banner/Banner';
import Password from '../components/restrictedpage/Password/Password';

const RestrictedPage = () => {
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState(''); // Initialize password state

  const handleLogin = (enteredPassword: string) => {
    // Simulated authentication logic
    if (enteredPassword === 'correctPassword') {
      // If the password is correct, set isLoggedIn to true
      setIsLoggedIn(true);
    } else {
      // If the password is incorrect, display an error message
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div>
      <Banner />
      {/* Pass the handleLogin function to the Password component */}
      <Password handleLogin={handleLogin} />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default RestrictedPage;
