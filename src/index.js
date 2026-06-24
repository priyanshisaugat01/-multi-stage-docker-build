const express = require('express');
const flightsController = require('./controllers/flightsController');

const app = express();
const PORT = 3000;

// Landing page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Styled flights page
app.get('/flights', flightsController.getFlights);

app.listen(PORT, () => {
  console.log(`Flight Dashboard running on port ${PORT}`);
});
