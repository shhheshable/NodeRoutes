// Import the Express framework
const express = require('express');

// Create a new router object using Express' Router class
// The router object allows us to define routes in a modular way
const router = express.Router();

const hp = require('../controller/HpController');

router.get('/', hp.nom )

router.get('/about', hp.about )

router.get('/contact', hp.contact )

router.get('/service', hp.service )

router.get('/product', hp.product )




// Export the router so it can be used in other files (like in app.js)
module.exports = router;
