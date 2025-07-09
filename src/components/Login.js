// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'IT') {
      navigate('/it');
    } else if (username === 'Finance') {
      navigate('/finance');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="https://www.tqm.co.th/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftqm-static%2Fassets%2Flogo-darkblue-TQM-70-years.png&w=384&q=75" alt="Login Background" />
        <h2>Login Admin</h2>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
