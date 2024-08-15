const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3001;

app.engine('hbs', exphbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');