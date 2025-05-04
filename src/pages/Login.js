// frontend/src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [pan, setPan] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, aadhar, pan }),
      });

      const data = await response.json();

      if (response.status === 200) {
        alert(data.message);
        navigate('/dashboard'); // Redirect to the dashboard after login
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login to Krishi Sahayak</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="text" placeholder="Aadhar Card Number" value={aadhar} onChange={(e) => setAadhar(e.target.value)} required />
        <input type="text" placeholder="PAN Card Number" value={pan} onChange={(e) => setPan(e.target.value)} required />
        <button type="submit" className="auth-button">Login</button>
      </form>
      <div className="auth-option">
        <p>Don't have an account?</p>
        <Link to="/signup" className="auth-link">Sign up here</Link>
      </div>
    </div>
  );
};

export default Login;
