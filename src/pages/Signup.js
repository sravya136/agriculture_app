import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [pan, setPan] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, aadhar, pan }),
      });

      const data = await response.json();

      if (response.status === 201) {
        alert(data.message);
        navigate('/login'); // Redirect to login after successful signup
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
      <h2>Sign Up for Krishi Sahayak</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Aadhar Number"
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="PAN Number"
          value={pan}
          onChange={(e) => setPan(e.target.value)}
          required
        />
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
      <div className="auth-option">
        <p>Already have an account?</p>
        <Link to="/login" className="auth-link">Login here</Link>
      </div>
    </div>
  );
};

export default Signup;
