// Create an object 'ph' that will store handler functions for routes
const ph = {
    // Define a method 'nom' that handles a request (req) and a response (res)
    nom: (req, res) => {
        res.render('index')
        
    },

    about: (req, res) => {
        res.render('about')
        
    },

    contact: (req, res) => {
        res.render('contact')
        
    },

    service: (req, res) => {
        res.render('service')
        
    },

    product: (req, res) => {
        res.render('product')
        
    },
};

// Export the 'ph' object so it can be used in other files (like in router.js or app.js)
module.exports = ph;
