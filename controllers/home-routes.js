const router = require('express').Router();
const stripe = require('stripe')('sk_test_51PlKKp2LbkaMI4KQzYv0Kn10D7CqOf2QZboQKUHgla6fLrH6mbC8de2VdibW697xwogpjkjufDL5nbdpBtXdXzvl00wI2AUdvd');
const express = require('express');


const { Game, User } = require('../models');

const YOUR_DOMAIN = 'http://localhost:3001';



router.get('/', async (req, res) => {
    try {
      res.render('homepage');
    } catch (err) {
      console.error('Error in root route:', err);  // Log the error
    res.status(500).send('Internal Server Error');
    }
  })
  router.get('/cart', async (req, res) => {
    try {
      res.render('cart');
    } catch (err) {
      console.error('Error in root route:', err);  // Log the error
    res.status(500).send('Internal Server Error');
    }
  })
  router.get('/success', async (req, res) => {
    try {
      res.render('success');
    } catch (err) {
      console.error('Error in root route:', err);  // Log the error
    res.status(500).send('Internal Server Error');
    }
  });
  router.get('/cancel', async (req, res) => {
    try {
      res.render('cancel');
    } catch (err) {
      console.error('Error in root route:', err);  // Log the error
    res.status(500).send('Internal Server Error');
    }
  });

  router.get('/games', async (req, res) => {
    try {
      res.render('games');
    } catch (err) {
      console.error('Error in root route:', err);  // Log the error
    res.status(500).send('Internal Server Error');
    }
  });

  router.get('/games/:consoleId', async (req, res) => {
    try {
      const consoleId = req.params.consoleId;
      const console = await Console.findByPk(consoleId);
      const games = await Game.findAll({ where: { console_id: consoleId } });
      
      res.render('games', {
        consoleName: console.name,
        games: games
      });
    } catch (error) {
      console.error('Error fetching games:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get('/list-item', async (req, res) => {
    try {
      res.render('list-item');
    } catch (err) {
      console.error('Error in root route:', err);  // Log the error
    res.status(500).send('Internal Server Error');
    }
  });

  router.get('/orders', async (req, res) => {
    try {
      res.render('orders');
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

  module.exports = router