import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RawMaterialSupply from './pages/RawMaterialSupply';
import CropSelection from './pages/CropSelection';
import MarketPrices from './pages/MarketPrices';
import GovernmentScheme from './pages/GovernmentScheme';
import DoctorsCorner from './pages/DoctorsCorner';
import CommunityForum from './pages/CommunityForum';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { readExcelFile } from './utils/readExcel';

function App() {
  const [user, setUser] = useState(() => {
    // Initialize user state from localStorage if available
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [products, setProducts] = useState([]);

  const handleLogin = (userData) => {
    setUser(userData); // Set user info after successful login
    localStorage.setItem('user', JSON.stringify(userData)); // Store user in localStorage
  };

  const handleLogout = () => {
    setUser(null); // Clear user info on logout
    localStorage.removeItem('user'); // Remove user from localStorage
  };

  useEffect(() => {
    const fetchData = async () => {
      const file = await fetch('/products.xlsx').then((res) => res.blob());
      const data = await readExcelFile(file);
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} /> {/* Pass user info and logout function to Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raw-material-supply" element={<RawMaterialSupply products={products} />} />
        <Route path="/crop-selection" element={<CropSelection />} />
        <Route path="/market-prices" element={<MarketPrices />} />
        <Route path="/government-scheme" element={<GovernmentScheme />} />
        <Route path="/doctors-corner" element={<DoctorsCorner />} />
        <Route path="/community-forum" element={<CommunityForum />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Pass handleLogin to Login component */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
