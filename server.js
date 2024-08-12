
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



app.listen(4242, () => console.log('Running on port 4242'));