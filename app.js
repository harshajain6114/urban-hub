const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing JSON

// Simple GET route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Test API route
app.get('/api/items', (req, res) => {
  res.json({ message: 'Items route working' });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  // MongoDB connection can go here
  mongoose.connect('your-mongodb-connection-string')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Error connecting to MongoDB:', err));
});
