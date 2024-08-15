// app.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80; // Change the port to 80

// Set up a route to render the message
app.get('/', (req, res) => {
    res.send('<h1>I finally cracked AWS!</h1>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
