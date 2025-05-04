// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db/connection');  // Import the database connection
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Define Routes
app.use('/', authRoutes);  // Authentication routes

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
