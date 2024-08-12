
// This is your test secret API key.
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
const routes = require('./controllers');
const PORT = 3001;


app.use(express.static('public'));

app.use(routes)



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.listen(3001, () => console.log(`Running on port ${PORT}`));