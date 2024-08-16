const router = require('express').Router();
const stripe = require('stripe')('sk_test_51PlKKp2LbkaMI4KQzYv0Kn10D7CqOf2QZboQKUHgla6fLrH6mbC8de2VdibW697xwogpjkjufDL5nbdpBtXdXzvl00wI2AUdvd');
const withAuth = require('../utils/auth');


const { Game, User, Console, gamesConsoles, Cart } = require('../models');

const YOUR_DOMAIN = 'http://localhost:3001';



router.get('/', async (req, res) => {
  try {
    const consolesData = await Console.findAll(); // Fetch all consoles
    const consoles = consolesData.map(console => console.get({ plain: true })); // Serialize data

    res.render('homepage', { consoles }); // Pass consoles to Handlebars
  } catch (err) {
    console.error('Error in root route:', err);
    res.status(500).send('Internal Server Error');
  }
});
<<<<<<< HEAD

  // router.get('/cart', async (req, res) => {
  //   try {
  //     res.render('cart');
  //   } catch (err) {
  //     console.error('Error in root route:', err);  // Log the error
  //   res.status(500).send('Internal Server Error');
  //   }
  // })
=======
  router.get('/cart', async (req, res) => {
    try {
      const consolesData = await Console.findAll(); // Fetch all consoles
    const consoles = consolesData.map(console => console.get({ plain: true })); // Serialize data
      res.render('cart', { consoles });
    } catch (err) {
      console.error('Error in root route:', err);  // Log the error
    res.status(500).send('Internal Server Error');
    }
  })
>>>>>>> 5ab888c8c73575e2374ee0d15c26e30511a23aad
  router.get('/success', async (req, res) => {
    try {
      const consolesData = await Console.findAll(); // Fetch all consoles
    const consoles = consolesData.map(console => console.get({ plain: true })); // Serialize data
      res.render('success', { consoles });
    } catch (err) {
      console.error('Error in root route:', err);  // Log the error
    res.status(500).send('Internal Server Error');
    }
  });
  router.get('/cancel', async (req, res) => {
    try {
      res.render('cancel', { consoles });
    } catch (err) {
      console.error('Error in root route:', err);  // Log the error
    res.status(500).send('Internal Server Error');
    }
  });

  router.get('/games', async (req, res) => {
    try {
      const consolesData = await Console.findAll(); // Fetch all consoles
    const consoles = consolesData.map(console => console.get({ plain: true })); // Serialize data
      res.render('games', { consoles });
    } catch (err) {
      console.error('Error in root route:', err);  // Log the error
    res.status(500).send('Internal Server Error');
    }
  });

  router.get('/games/:console_id', async (req, res) => {
    const consoleId = req.params.console_id;
    const consolesData = await Console.findAll(); // Fetch all consoles
    const consoles = consolesData.map(console => console.get({ plain: true })); // Serialize data

    try {
      const consolesData = await Console.findAll(); // Fetch all consoles
    const consoles = consolesData.map(console => console.get({ plain: true })); // Serialize data
        const consoleData = await Console.findByPk(consoleId, {
            include: {
                model: Game,
                through: {
                    model: gamesConsoles,
                    attributes: ['price', 'condition', 'stock'],
                },
            },
        });

        if (!consoleData) {
            res.status(404).json({ message: 'No console found with this id!' });
            return;
        }

        const console = consoleData.get({ plain: true });

        res.render('games', { console, games: console.games, consoles });
    } catch (error) {
      console.error('Error fetching games:', error);
      res.status(500).send('Internal Server Error');
    }
  });
    

  router.get('/list-item', async (req, res) => {
    try {
      const consolesData = await Console.findAll(); // Fetch all consoles
    const consoles = consolesData.map(console => console.get({ plain: true })); // Serialize data
      res.render('list-item', { consoles });
    } catch (err) {
      console.error('Error in root route:', err);  // Log the error
    res.status(500).send('Internal Server Error');
    }
  });

  router.get('/orders', async (req, res) => {
    try {
      const consolesData = await Console.findAll(); // Fetch all consoles
    const consoles = consolesData.map(console => console.get({ plain: true })); // Serialize data
      res.render('orders', { consoles });
    } catch (err) {
      console.error('Error in root route:', err);  // Log the error
    res.status(500).send('Internal Server Error');
    }
  });

  router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/cancel`,
    });
    res.redirect(303, session.url);
  });

<<<<<<< HEAD
  // Route to fetch all items in a user's cart and render them in a Handlebars template
router.get('/cart', async (req, res) => {
  try {
    const userId = 1; // Assuming you have user authentication and the user ID is available in req.user

    // Find all items in the user's cart
    const cartItems = await Cart.findAll({
      where: { user_id: 1 },
      include: [
        {
          model: gamesConsoles,
          include: [
            {
              model: Game,
              attributes: ['title'], // Include the game title
            },
            {
              model: Console,
              attributes: ['console'], // Include the console information
            },
          ],
          attributes: ['price'], // Include the price from gamesConsoles
        },
      ],
    });
    console.log(cartItems[0].gamesConsole.game.title);
    // Format the response data for the template
    const formattedCartItems = cartItems.map((item) => ({
      title: item.gamesConsole.game.title,
      console: item.gamesConsole.console.console,
      price: item.gamesConsole.price,
      quantity: item.quantity,
    }));

    // Render the Handlebars template 'cart' with the cart items
    res.render('cart', { cartItems: formattedCartItems });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve cart items.' });
  }
});

module.exports = router;
=======
  router.get('/signup', (req, res) => {
    res.render('signup');
  });
  
  
  router.post('/signup', async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Validate input data
      if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      // Create the new user
      const newUser = await User.create({
        username,
        email,
        password,
      });
  
      // Save the session after successful signup
      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.loggedIn = true;
  
        // Redirect to the homepage
        res.status(200).json(newUser);
      });
    } catch (err) {
      console.error('Signup error:', err);
      res.status(500).json({ message: 'Failed to sign up', error: err.message });
    }
  });
  
  
  
  
  // Login route
  router.get('/login', (req, res) => {
    res.render('login');
  });
>>>>>>> 5ab888c8c73575e2374ee0d15c26e30511a23aad

  module.exports = router