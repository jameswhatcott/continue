console.time('Startup');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
console.log('Helpers loaded:', helpers);
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const routes = require('./controllers');
const PORT = process.env.PORT || 3001;

console.log('Loading Sequelize...');
const sequelize = require('./config/connection');
console.log('Sequelize loaded, authenticating DB...');

// Test DB connection early
console.time('DB Connect');
sequelize.authenticate()
  .then(() => {
    console.timeEnd('DB Connect');
    console.log('DB connected successfully');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(1); // Exit if DB fails
  });

// Initialize app after DB is confirmed
const app = express();

// Session config (only after DB is ready)
const sess = {
  secret: process.env.SESSION_SECRET || 'Super secret secret',
  cookie: {
    maxAge: 60 * 60 * 1000, // 1 hour
    httpOnly: true,
    secure: false, // Set to true if using HTTPS
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

// Handlebars setup
const hbs = exphbs.create({
  helpers: helpers // Register all helpers from helpers.js
});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Routes
app.use(routes);
app.use('/api/users', require('./controllers/api/userRoute'));
app.use('/cart', require('./controllers/api/cartRoute'));

// Custom route for style.css
app.get('/style.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(path.join(__dirname, 'public/style.css'));
});

// Placeholder for Stripe (uncomment and configure if needed)
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [{ price: 'PRICE_ID', quantity: 1 }],
//     mode: 'payment',
//     success_url: `${process.env.YOUR_DOMAIN}/success.html`,
//     cancel_url: `${process.env.YOUR_DOMAIN}/cancel.html`,
//   });
//   res.redirect(303, session.url);
// });

// Start server
console.time('Server Start');
app.listen(PORT, () => {
  console.timeEnd('Server Start');
  console.timeEnd('Startup');
  console.log(`Server running on port ${PORT}`);
});