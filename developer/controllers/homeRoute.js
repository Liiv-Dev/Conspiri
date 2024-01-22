const router = require('express').Router(); // import express router

router.get('/', async (req, res) => { 
    // Send the rendered Handlebars.js template back as the response
    res.render('homepage') // render homepage
})

module.exports = router; // export router