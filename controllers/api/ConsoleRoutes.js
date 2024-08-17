const express = require('express');
const { Console } = require('../../models');
const router = express.Router();

// Define routes here
router.get('/', (req, res) => {
    res.send('Console routes');
});

module.exports = router;
