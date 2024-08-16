const router = require('express').Router();
const { User } = require('../../models');


router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Example of a login route definition in your Express server
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Authenticate the user (this is just an example)
    const user = await User.findOne({ where: { email } });
    if (user && user.password === password) {
      req.session.user_id = user.id;
      req.session.loggedIn = true;
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(400).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    res.status(500).json({ message: 'An error occurred', error: err.message });
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
