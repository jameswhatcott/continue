const router = require('express').Router();
const { Console } = require('../../models');

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

