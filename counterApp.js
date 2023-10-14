const express = require('express');
const app = express();

// Initialize the counter
let counter = 0;

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to get the current counter value
app.get('/', (req, res) => {
  res.json({ counter });
});

// Endpoint to increment the counter by 1
app.post('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

// Endpoint to decrement the counter by 1
app.post('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
