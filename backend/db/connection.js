// backend/db/connection.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost', // Replace with your database host
  user: 'root',      // Replace with your MySQL username
  password: 'root', // Replace with your MySQL password
  database: 'krishi_sahayak', // Replace with your MySQL database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = db;
