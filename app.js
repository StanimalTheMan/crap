/*
   I do not know how I am going to implement most of my stuff. esp making sure users keep this a baseball forum and not a general forum if that's important for this project
   slugs and in general the specific routes idk yet
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