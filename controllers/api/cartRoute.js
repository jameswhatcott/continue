// routes/cart.js
const express = require('express');
const router = express.Router();
const { Cart, Game, gamesConsoles } = require('../../models');


// Add item to cart
router.post('/add', async (req, res) => {
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


// Remove item from cart
router.delete('/remove', async (req, res) => {
  const { user_id, gameConsole_id } = req.body;

  try {
    const cartItem = await Cart.findOne({
      where: { user_id, gameConsole_id },
    });

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
