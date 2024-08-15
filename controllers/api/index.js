const router = require('express').Router();
const cartRoute = require('./cartRoute');
const consoleRoutes = require('./consoleRoutes');
const gameRoutes = require('./consoleRoutes');
const gamesConsoleRoutes = require('./gamesConsoleRoutes');
const userRoute = require('./userRoute');
const checkoutRoute = require('./checkoutRoute');
const cancelRoute = require('./cancelRoute');
const sucessRoute = require('./sucessRoute');


router.use('/user', userRoute);
router.use('/cart', cartRoute);
router.use('/consoles', consoleRoutes);
router.use('/games', gameRoutes);
router.use('/gamesConsole', gamesConsoleRoutes);
router,use('/checkout', checkoutRoute);
router.use('/cancel', cancelRoute);
router.use('/success', sucessRoute);


module.exports = router

