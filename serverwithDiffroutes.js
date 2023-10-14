const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.json({ msg: 'I am homepage' });
});

app.get('/about', (req, res) => {
  res.json({ msg: 'I am about page' });
});

app.get('/contact', (req, res) => {
  res.json({ email: 'support@pwskills.com' });
});

// Define a 404 route for handling undefined routes
app.use((req, res) => {
  res.status(404).json({ msg: 'Page not found' });
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
