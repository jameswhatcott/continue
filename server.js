
// This is your test secret API key.
const express = require('express');
const session = require('express-session');
const app = express();
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const hbs = exphbs.create({});
const routes = require('./controllers');
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');



const sess = {
  secret: process.env.SESSION_SECRET || 'Super secret secret',
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));


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


require('dotenv').config();
const {Game, User, Console} = require('./models')

app.use(routes)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'Super secret secret', resave: false, saveUninitialized: true }));

app.use('/api/users', require('./controllers/api/userRoute')); // Make sure this path matches your login.js a


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

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

