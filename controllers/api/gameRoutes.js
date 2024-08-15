const express = require('express');
const { Game} = require('../../models');
const router = express.Router();

// Define routes here
router.get('/', (req, res) => {
    res.send('Game routes');
});

module.exports = router;