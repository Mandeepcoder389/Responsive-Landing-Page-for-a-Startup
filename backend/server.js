const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (local)
mongoose.connect('mongodb://localhost:27017/ladifyx', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a User schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});
const User = mongoose.model('User', userSchema);

// Signup endpoint
app.post('/api/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = new User({ firstName, lastName, email, password });
    await user.save();
    res.json({ message: 'User registered successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user.' });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000')); 