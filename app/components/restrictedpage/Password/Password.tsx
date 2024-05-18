// app/components/restrictedpage/Password/Password.tsx
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import vector from '@/app/img/Vector.png';
import './Password.css';
import '@/app/components/button.css';
import Button from '@mui/material/Button';
import "@/app/components/button.css"
interface PasswordProps {  
  handleLogin: (password: string) => void; // Corrected handleLogin function signature
}

const Password: React.FC<PasswordProps> = ({ handleLogin }) => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if the entered password is correct
    if (password === 'correctPassword') {
      // If correct, call the handleLogin function provided by the parent component
      handleLogin(password);
    } else {
      // If incorrect, display an error message
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="password">
      <h2>Password Protected</h2>
      <p>This page is password protected. If you are the website admin, or have access to this page, please type your password below.</p>
      <form onSubmit={handleSubmit} id='tt'>
        <input 
          className="input" 
          type="password" 
          placeholder="Enter your password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Submit Now <Image src={vector} alt=""/></button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Password;
