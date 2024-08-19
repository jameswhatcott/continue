const router = require('express').Router();
const stripe = require('stripe')('sk_test_51PlKKp2LbkaMI4KQzYv0Kn10D7CqOf2QZboQKUHgla6fLrH6mbC8de2VdibW697xwogpjkjufDL5nbdpBtXdXzvl00wI2AUdvd');
const withAuth = require('../utils/auth');
const bcrypt = require('bcrypt');
const { Game, User, Console, gamesConsoles, Cart } = require('../models');

const YOUR_DOMAIN = 'http://localhost:3001';

// Home page route - Fetches and displays all consoles
router.get('/', async (req, res) => {
  try {
    const consolesData = await Console.findAll();
    const consoles = consolesData.map(console => console.get({ plain: true }));

    res.render('homepage', { consoles, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error('Error in root route:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Success and Cancel routes - Renders respective pages
router.get('/success', async (req, res) => {
  try {
    const consolesData = await Console.findAll();
    const consoles = consolesData.map(console => console.get({ plain: true }));

    res.render('success', { consoles, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error('Error in success route:', err);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/cancel', async (req, res) => {
  try {
    const consolesData = await Console.findAll();
    const consoles = consolesData.map(console => console.get({ plain: true }));

    res.render('cancel', { consoles, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error('Error in cancel route:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Fetch games by console ID and render games page
router.get('/games/:console_id', async (req, res) => {
  const consoleId = req.params.console_id;

  try {
    const consolesData = await Console.findAll();
    const consoles = consolesData.map(console => console.get({ plain: true }));

    const consoleData = await Console.findByPk(consoleId, {
      include: {
        model: Game,
        through: {
          model: gamesConsoles,
          // attributes: ['price', 'condition', 'stock'],
        },
      },
    });
   
    if (!consoleData) {
      res.status(404).json({ message: 'No console found with this id!' });
      return;
    }

    const console1 = consoleData.get({ plain: true });
    console.log(console1.games[0].gamesConsoles)
    res.render('games', {
      console:console1,
      games: console1.games,
      consoles,
      loggedIn: req.session.loggedIn,
    });
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Stripe checkout session creation
router.post('/create-checkout-session', async (req, res) => {
  const user_id = req.session.user_id 
  const cartItems = await Cart.findAll({
      where: { user_id },
      include: [
        {
          model: gamesConsoles,
          required: true,
          include: [
            {
              model: Game,
              required: true,
            },
          ],
        },
      ],
    });
    const items = cartItems.map((item)=> {
      return {
        price_data: {
          currency: 'usd',
          product_data: { name: item.get({plain:true}).gamesConsole.game.title },
          unit_amount: 2999,
        },
        quantity: 1,
      }
    })
    console.log(items);
 
  const session = await stripe.checkout.sessions.create({
    line_items: items,
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/cancel`,
  });
  res.redirect(303, session.url);
});

router.get('/cart', async (req, res) => {
  const { user_id } = req.session;

  try {
    const cartItems = await Cart.findAll({
      where: { user_id },
      include: [
        {
          model: gamesConsoles,
          required: true,
          include: [
            {
              model: Game,
              required: true,
            },
          ],
        },
      ],
    });
    const items = cartItems.map((item)=> {
      return item.get({plain: true})
    })
    console.log(items);
    if (cartItems.length > 0) {
      res.render("cart", {cartItems: items})
    } else {
      res.status(404).json({ message: 'Cart is empty' });
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ error: 'An error occurred while fetching the cart.' });
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/cart', async (req, res) => {
  try {
    const consolesData = await Console.findAll();
    const consoles = consolesData.map(console => console.get({ plain: true }));

    res.render('cart', { consoles, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error('Error in root route:', err);
    res.status(500).send('Internal Server Error');
  }
})

router.post('cart/add', async (req, res) => {
  try {
    const { gameId, quantity } = req.body;
    const userId = req.session.user_id; 

    const gameConsoleItem = await gamesConsoles.findOne({
      where: { game_id: gameId },
    });

    if (!gameConsoleItem) {
      return res.status(404).json({ error: 'Game not found.' });
    }

    let cartItem = await Cart.findOne({
      where: { user_id: userId, gameConsole_id: gameConsoleItem.id },
    });

    if (cartItem) {
      cartItem.quantity += parseInt(quantity, 10);
      await cartItem.save();
    } else {
      cartItem = await Cart.create({
        user_id: userId,
        gameConsole_id: gameConsoleItem.id,
        quantity: parseInt(quantity, 10),
      });
    }

    res.status(200).json(cartItem);
  } catch (err) {
    console.error('Error adding item to cart:', err);
    res.status(500).json({ error: 'Failed to add item to cart.' });
  }
});

module.exports = router;
