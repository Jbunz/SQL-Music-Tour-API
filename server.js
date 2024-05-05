// DEPENDENCIES
const express = require('express');

const app = express();

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    });
});

// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)


// LISTEN
const PORT = process.env.PORT || 3000; // Use PORT from .env file or default to 3000
app.listen(PORT, () => {
    console.log(`🎸 Rockin' on port: ${PORT}`);
});
