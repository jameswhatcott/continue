// routes/cart.js
const express = require('express');
const router = express.Router();
const Cart = require('../../models/Cart'); // Adjust the path as necessary
const Game = require('../../models/Game'); // Assuming you have a Game model

router.post('/cart/add', async (req, res) => {
  try {
      const { game_id, console_id, price } = req.body;

      // Add the game to the cart in the database
      await Cart.create({
          user_id: req.session.user_id,  // Assuming you have a logged-in user
          game_id,
          console_id,
          quantity: 1,  // Default quantity
          price
      });

      res.redirect('games'); // Redirect back to the previous page
  } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
  }
});






// Add item to cart
router.post('/add', async (req, res) => {
  const { user_id, game_id, quantity } = req.body;

  try {
    // Check if item is already in the cart
    let cartItem = await Cart.findOne({ where: { user_id, game_id } });

    if (cartItem) {
      // If item exists, update quantity
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      // If item doesn't exist, create a new entry
      cartItem = await Cart.create({ user_id, game_id, quantity });
    }

    res.status(200).json({ message: 'Item added to cart', cartItem });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'An error occurred while adding the item to the cart.' });
  }
});

// Remove item from cart
router.delete('/remove', async (req, res) => {
  const { user_id, game_id } = req.body;

  try {
    const cartItem = await Cart.findOne({ where: { user_id, game_id } });

    if (cartItem) {
      await cartItem.destroy();
      res.status(200).json({ message: 'Item removed from cart' });
    } else {
      res.status(404).json({ error: 'Item not found in cart' });
    }
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ error: 'An error occurred while removing the item from the cart.' });
  }
});

// Get user's cart
router.get('/:user_id', async (req, res) => {
  const { user_id } = req.params;

  try {
    const cartItems = await Cart.findAll({
      where: { user_id },
      include: [
        {
          model: Game, // Include the Game model to get game details
          as: 'game', // Assuming you have set an alias in the association
        }
      ]
    });

    if (cartItems.length > 0) {
      res.status(200).json(cartItems);
    } else {
      res.status(404).json({ message: 'Cart is empty' });
    }
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ error: 'An error occurred while fetching the cart.' });
  }
});

module.exports = router;