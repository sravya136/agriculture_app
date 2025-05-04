import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/logo1.png" alt="Krishi Sahayak Logo" className="logo-image" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/raw-material-supply">Raw Material Supply</Link>
        <Link to="/crop-selection">Crop Selection</Link>
        
        <Link to="/government-scheme">Government Scheme</Link>
        <Link to="/doctors-corner">Doctor's Corner</Link>
        <Link to="/community-forum">Community Forum</Link>
      </div>
      <div className="navbar-auth">
        {user ? (
          <>
            <span>Welcome, {user.name || user.email}</span> {/* Display user's name or email if logged in */}
            <Link to="/profile" className="navbar-profile-link">Profile</Link> {/* Show Profile link */}
            <button onClick={onLogout} className="navbar-logout-button">Logout</button> {/* Logout button */}
          </>
        ) : (
          <Link to="/login">Login / Sign In</Link> 
        )}
      </div>
    </nav>
  );
};

export default Navbar;
