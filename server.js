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
mongoose.connect('mongodb://localhost:27017/beers', { useNewUrlParser: true });
// Error handling
try {
    mongoose.connect('mongodb://localhost/Ale-PI', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => 
        console.log(`MongoDB is successfully connected`));
} catch (error) {
    console.log(`ALERT: MongoDB could not connect ${error}`);
}

// Port connection
app.listen(PORT, function() {
    console.log(`Server is running on Port: ${PORT}`)
});