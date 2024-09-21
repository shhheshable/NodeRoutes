// Import the Express framework for creating web applications
const express = require('express');

// Import the body-parser middleware to handle form data (urlencoded and JSON)
const bodyParcer = require('body-parser');

// Import the routes defined in the './routes/router' file
const routes = require('./routes/router');

// Create an Express application
const app = express();

// Set the view engine to 'ejs', which is used for rendering HTML templates
app.set('view engine', 'ejs');

// Use body-parser to parse incoming request bodies in a URL-encoded format
// 'extended: true' allows for rich objects and arrays to be encoded into the URL-encoded format
app.use(bodyParcer.urlencoded({ extended: true }));


// Use the imported routes for handling requests to the root path
app.use('/', routes);

// Start the server on port 3000 and log a message when it’s ready
app.listen(3000, () => {
    console.log('server initialized on http://localhost:3000');
});
