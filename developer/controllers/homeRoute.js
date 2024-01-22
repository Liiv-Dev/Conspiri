const router = require('express').Router(); // import express router

router.get('/', async (req, res) => { 
    // Send the rendered Handlebars.js template back as the response
    res.render('homepage') // render homepage
});

router.get('/login', async (req, res) => { 
    // Send the rendered Handlebars.js template back as the response
    res.render('login') // render login page
})

module.exports = router; // export router