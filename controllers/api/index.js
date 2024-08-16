const router = require('express').Router();
const cartRoutes = require('./cartRoutes');
const consoleRoutes = require('./ConsoleRoutes');
const gameRoutes = require('./gameRoutes');
const gamesConsoleRoutes = require('./gamesConsoleRoutes');
const userRoutes = require('./userRoute');


router.use('/users', userRoutes);
router.use('/cart', cartRoutes);
router.use('/consoles', consoleRoutes);
router.use('/games', gameRoutes);
// router.use('/gamesConsole', gamesConsoleRoutes);


module.exports = router

