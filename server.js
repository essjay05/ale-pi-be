// Constants
const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send(`Hello World, this server is running on localhost: ${PORT}`)
});


// Port connection
app.listen(PORT, function() {
    console.log(`Server is running on Port: ${PORT}`)
});