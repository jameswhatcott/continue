
// This is your test secret API key.
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
const routes = require('./controllers');
const PORT = 3001;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Other middleware and routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/style.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(path.join(__dirname, 'public/style.css'));
});


app.use(express.static(path.join(__dirname, 'public')));


const sequelize = require('./config/connection');
require('dotenv').config();
const {Game, User, Console} = require('./models')

app.use(routes)



app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

sequelize.sync({ force: true }).then(() => {
  app.listen(3001, () => console.log('Now listening'));
});

