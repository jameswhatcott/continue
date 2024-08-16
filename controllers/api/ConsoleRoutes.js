const express = require('express');
const { Console } = require('../../models');
<<<<<<< HEAD
const router = express.Router();

// Define routes here
router.get('/', (req, res) => {
    res.send('Console routes');
});

module.exports = router;
=======

// GET all consoles
router.get('/', async (req, res) => {
    try {
        const consoleData = await Console.findAll();
        res.status(200).json(consoleData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a specific console by ID
router.get('/:id', async (req, res) => {
    try {
        const consoleData = await Console.findByPk(req.params.id);
        if (!consoleData) {
            res.status(404).json({ message: 'No console found with this id!' });
            return;
        }
        res.status(200).json(consoleData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Other console routes...

module.exports = router;

>>>>>>> 5ab888c8c73575e2374ee0d15c26e30511a23aad
