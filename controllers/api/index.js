const router = require('express').Router();
const cartRoutes = require('./cartRoutes');
const consoleRoutes = require('./consoleRoutes');
const gameRoutes = require('./consoleRoutes');
const gamesConsoleRoutes = require('./gamesConsoleRoutes');
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);
router.use('/cart', cartRoutes);
router.use('/consoles', consoleRoutes);
router.use('/games', gameRoutes);
router.use('/gamesConsole', gamesConsoleRoutes);


module.exports = router

