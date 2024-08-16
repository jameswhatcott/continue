const router = require('express').Router();
const homeRouter = require('./home-routes');
const apiRoutes = require('./api');

router.use('/', homeRouter);
router.use('api', apiRoutes);






module.exports = router;