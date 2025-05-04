// backend/routes/authRoutes.js
const express = require('express');
const db = require('../db/connection');  // Import the database connection
const router = express.Router();

// Login endpoint
router.post('/login', (req, res) => {
  const { email, password, aadhar, pan } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ? AND password = ? AND aadhar = ? AND pan = ?';
  db.query(sql, [email, password, aadhar, pan], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length > 0) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

// Signup endpoint
router.post('/signup', (req, res) => {
  const { email, password, aadhar, pan } = req.body;

  // Check if the user already exists
  const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(checkUserQuery, [email], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length > 0) {
      return res.status(409).json({ message: 'User already exists' });
    } else {
      // Insert the new user into the database
      const sql = 'INSERT INTO users (email, password, aadhar, pan) VALUES (?, ?, ?, ?)';
      db.query(sql, [email, password, aadhar, pan], (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Internal server error' });
        }

        return res.status(201).json({ message: 'User registered successfully' });
      });
    }
  });
});

module.exports = router;
