
// This is your test secret API key.
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
const routes = require('./controllers');
const PORT = 3001;


app.use(express.static('public'));
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
 app.listen(3001, () => console.log(`Running on port ${PORT}`));

});

