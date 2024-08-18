const router = require('express').Router();
const stripe = require('stripe')('sk_test_51PlKKp2LbkaMI4KQzYv0Kn10D7CqOf2QZboQKUHgla6fLrH6mbC8de2VdibW697xwogpjkjufDL5nbdpBtXdXzvl00wI2AUdvd');
const withAuth = require('../utils/auth');
const bcrypt = require('bcrypt');



const { Game, User, Console, gamesConsoles, Cart } = require('../models');

const YOUR_DOMAIN = 'http://localhost:3001';



router.get('/', async (req, res) => {
  try {
    const consolesData = await Console.findAll(); // Fetch all consoles
    const consoles = consolesData.map(console => console.get({ plain: true })); // Serialize data

    res.render('homepage', { consoles ,
      loggedIn: req.session.loggedIn,
     }); // Pass consoles to Handlebars
  } catch (err) {
    console.error('Error in root route:', err);
    res.status(500).send('Internal Server Error');
  }
});
  // router.get('/cart', async (req, res) => {
  //   try {
  //     const consolesData = await Console.findAll(); // Fetch all consoles
  //   const consoles = consolesData.map(console => console.get({ plain: true })); // Serialize data
  //     res.render('cart', { consoles, loggedIn: req.session.loggedIn
  //     });
  //   } catch (err) {
  //     console.error('Error in root route:', err);  // Log the error
  //   res.status(500).send('Internal Server Error');
  //   }
  // })
  router.get('/success', async (req, res) => {
    try {
      const consolesData = await Console.findAll(); // Fetch all consoles
    const consoles = consolesData.map(console => console.get({ plain: true })); // Serialize data
      res.render('success', { consoles, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.error('Error in root route:', err);  // Log the error
    res.status(500).send('Internal Server Error');
    }
  });
  router.get('/cancel', async (req, res) => {
    try {
      res.render('cancel', { consoles, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.error('Error in root route:', err);  // Log the error
    res.status(500).send('Internal Server Error');
    }
  });

  router.get('/games', async (req, res) => {
    try {
      const consolesData = await Console.findAll(); // Fetch all consoles
    const consoles = consolesData.map(console => console.get({ plain: true })); // Serialize data
      res.render('games', { consoles, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.error('Error in root route:', err);  // Log the error
    res.status(500).send('Internal Server Error');
    }
  });

  // Existing GET route for fetching games by console
router.get('/games/:console_id', async (req, res) => {
  const consoleId = req.params.console_id;
  const consolesData = await Console.findAll(); // Fetch all consoles
  const consoles = consolesData.map(console => console.get({ plain: true })); // Serialize data

  try {
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

      res.render('games', { console, games: console.games, consoles, loggedIn: req.session.loggedIn });
  } catch (error) {
      console.error('Error fetching games:', error);
      res.status(500).send('Internal Server Error');
  }
});

// New POST route for adding a game to the cart
router.post('/cart/add', async (req, res) => {
  const { gameId, quantity } = req.body;
  const userId = req.session.user_id; // Assuming you store the user ID in the session

  try {
      // Check if the game is already in the cart
      let cartItem = await Cart.findOne({
          where: { user_id: userId, gameConsole_id: gameId }
      });

      if (cartItem) {
          // If the game is already in the cart, update the quantity
          cartItem.quantity += parseInt(quantity, 10);
          await cartItem.save();
      } else {
          // If the game is not in the cart, create a new entry
          cartItem = await Cart.create({
              user_id: userId,
              gameConsole_id: gameId,
              quantity: parseInt(quantity, 10)
          });
      }

      res.redirect('/cart'); // Redirect to the cart page after adding the item
  } catch (err) {
      console.error('Error adding game to cart:', err);
      res.status(500).json({ error: 'Failed to add game to cart.' });
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

  // Route to fetch all items in a user's cart and render them in a Handlebars template
// router.get('/cart', async (req, res) => {
//   try {
//     const userId = 1; // Assuming you have user authentication and the user ID is available in req.user

//     // Find all items in the user's cart
//     const cartItems = await Cart.findAll({
//       where: { user_id: 1 },
//       include: [
//         {
//           model: gamesConsoles,
//           include: [
//             {
//               model: Game,
//               attributes: ['title'], // Include the game title
//             },
//             {
//               model: Console,
//               attributes: ['console'], // Include the console information
//             },
//           ],
//           attributes: ['price'], // Include the price from gamesConsoles
//         },
//       ],
//     });
//     console.log(cartItems[0].gamesConsole.game.title);
//     // Format the response data for the template
//     const formattedCartItems = cartItems.map((item) => ({
//       title: item.gamesConsole.game.title,
//       console: item.gamesConsole.console.console,
//       price: item.gamesConsole.price,
//       quantity: item.quantity,
//     }));

//     // Render the Handlebars template 'cart' with the cart items
//     res.render('cart', { cartItems: formattedCartItems, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to retrieve cart items.' });
//   }
// });


// router.post('/cart/add', async (req, res) => {
//   const { userId, gameId, quantity } = req.body;

//   try {
//     // Find the gameConsole record that corresponds to the gameId
//     const gameConsole = await gamesConsoles.findOne({ where: { game_id: gameId } });

//     if (!gameConsole) {
//       return res.status(404).json({ error: 'Game not found.' });
//     }

//     // Check if item is already in the cart
//     let cartItem = await Cart.findOne({ where: { user_id: userId, gameConsole_id: gameConsole.id } });

//     if (cartItem) {
//       // If item exists, update quantity
//       cartItem.quantity += parseInt(quantity, 10);
//       await cartItem.save();
//     } else {
//       // If item doesn't exist, create a new entry
//       cartItem = await Cart.create({ user_id: userId, gameConsole_id: gameConsole.id, quantity });
//     }

//     res.status(200).json({ message: 'Item added to cart', cartItem });
//   } catch (error) {
//     console.error('Error adding item to cart:', error);
//     res.status(500).json({ error: 'An error occurred while adding the item to the cart.' });
//   }
// });



  
  
  
  // Login route
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
  module.exports = router