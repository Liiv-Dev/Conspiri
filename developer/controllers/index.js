const router = require('express').Router(); // import express router

const homeRoutes = require('./homeRoute'); // import homeRoute

router.use('/', homeRoutes); // use homeRoute

module.exports = router; // export router