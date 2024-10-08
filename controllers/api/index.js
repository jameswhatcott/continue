const router = require('express').Router();
const cartRoutes = require('./cartRoute');
const consoleRoutes = require('./ConsoleRoutes');
const gameRoutes = require('./gameRoutes');
const gamesConsoleRoutes = require('./gamesConsoleRoutes');
const userRoute = require('./userRoute');

// Define routes
router.use('/user', userRoute);
router.use('/cart', cartRoutes);
router.use('/consoles', consoleRoutes);
router.use('/games', gameRoutes);
router.use('/gamesConsole', gamesConsoleRoutes);

module.exports = router;

