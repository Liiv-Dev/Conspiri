const router = require('express').Router(); // import express router
const homeRoutes = require('./homeRoute'); // import homeRoute
const apiRoutes = require('./api'); // import apiRoutes

router.use('/', homeRoutes); // use homeRoute
router.use('/api', apiRoutes); // use apiRoutes

module.exports = router; // export router