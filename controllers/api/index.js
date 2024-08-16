<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const cartRoutes = require('./cartRoute');
const ConsoleRoutes = require('./ConsoleRoutes');
=======
const router = require('express').Router();
const cartRoutes = require('./cartRoutes');
const consoleRoutes = require('./ConsoleRoutes');
const gameRoutes = require('./gameRoutes');
>>>>>>> 5ab888c8c73575e2374ee0d15c26e30511a23aad
const gamesConsoleRoutes = require('./gamesConsoleRoutes');
const userRoutes = require('./userRoute');

// Define routes
router.use('/user', userRoutes);
router.use('/cart', cartRoutes);
<<<<<<< HEAD
router.use('/consoles', ConsoleRoutes);
router.use('/gamesConsole', gamesConsoleRoutes);
=======
router.use('/consoles', consoleRoutes);
router.use('/games', gameRoutes);
// router.use('/gamesConsole', gamesConsoleRoutes);
>>>>>>> 5ab888c8c73575e2374ee0d15c26e30511a23aad

module.exports = router;

