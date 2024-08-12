const router = require('express').Router();
const { Game, User } = require('../models');


router.get('/', async (req, res) => {
    try {
      res.render('homepage');
    } catch (err) {
      res.status(500).json(err);
    }
  })
  
  router.get('/checkout', async (req, res) => {
    try {
      res.render('checkout');
    } catch (err) {
      res.status(500).json(err);
    }
  })
  
  router.get('/success', async (req, res) => {
    try {
      res.render('success');
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/cancel', async (req, res) => {
    try {
      res.render('cancel');
    } catch (err) {
      res.status(500).json(err);
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