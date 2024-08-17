const express = require('express');
const { gamesConsoles } = require('../../models');
const router = express.Router();


// Define routes here
router.get('/', (req, res) => {
    res.send('Games Console routes');
});

module.exports = router;