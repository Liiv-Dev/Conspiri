const router = require('express').Router(); // import express router
const { User } = require('../models'); // import models

router.get('/', async (req, res) => { 
    // Send the rendered Handlebars.js template back as the response
    res.render('homepage') // render homepage
});

router.get('/login', async (req, res) => { 
    // Send the rendered Handlebars.js template back as the response
    res.render('login') // render login page
})

router.get('/signup', async (req, res) => { 
    // Send the rendered Handlebars.js template back as the response
    res.render('signup') // render signup page
})

router.get('/dashboard', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    res.render('dashboard') // render dashboard page
})

module.exports = router; // export router