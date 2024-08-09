
// This is your test secret API key.
const stripe = require('stripe')('sk_test_51PlKKp2LbkaMI4KQzYv0Kn10D7CqOf2QZboQKUHgla6fLrH6mbC8de2VdibW697xwogpjkjufDL5nbdpBtXdXzvl00wI2AUdvd');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
})

app.get('/checkout', async (req, res) => {
  try {
    res.render('checkout');
  } catch (err) {
    res.status(500).json(err);
  }
})

app.get('/success', async (req, res) => {
  try {
    res.render('success');
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get('/cancel', async (req, res) => {
  try {
    res.render('cancel');
  } catch (err) {
    res.status(500).json(err);
  }
});


app.post('/create-checkout-session', async (req, res) => {
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

app.listen(4242, () => console.log('Running on port 4242'));