const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // ✅ import cors
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
const userRoutes = require('./routes/user.route.js');

// ✅ enable CORS for all origins (you can restrict it later)
app.use(cors());

// Parse JSON
app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || process.env.MONGO_URI;
if (!mongoURI) {
  console.warn('No MongoDB URI provided.');
} else {
  mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

if (userRoutes && (typeof userRoutes === 'function' || typeof userRoutes.use === 'function')) {
  app.use('/api', userRoutes);
} else {
  console.warn('Invalid user route export.');
}

app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
