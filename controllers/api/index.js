const router = require('express').Router();
const cartRoute = require('./cartRoute');
const consoleRoutes = require('./consoleRoutes');
const gameRoutes = require('./gameRoutes');
const gamesConsoleRoutes = require('./gamesConsoleRoutes');
const userRoute = require('./userRoute');


router.use('/users', userRoute);
router.use('/cart', cartRoute);
router.use('/consoles', consoleRoutes);
router.use('/games', gameRoutes);
router.use('/gamesConsole', gamesConsoleRoutes);


module.exports = router

