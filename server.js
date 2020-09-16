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

// Connect to DB
mongoose.connect('mongodb://127.00.0.1:27017/beers', { useNewUrlParser: true })
const connection = mongoose.connection;

connection.once('open', function() {
    console.log(`MongoDB database connection established successfully`);
})

// Port connection
app.listen(PORT, function() {
    console.log(`Server is running on Port: ${PORT}`)
});