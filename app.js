/*
   I do not know how I am going to implement most of my stuff. like setting a timer for user's inputting as many all stars as possible,
   hints possibly, registrating an user (whether I make a user make a password and supply a confirm password option as well) etc. so below
   is generic app.js stuff that I've been doing for homeworks in past and from Mr. Versoza's sample documentation.
*/

require('./db');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// enable sessions
const session = require('express-session');
const sessionOptions = {
    secret: 'mets...store this somewhere else',
    resave: true,
      saveUninitialized: true//look into this see if I will set this to false
};
app.use(session(sessionOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// body parser setup
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000);