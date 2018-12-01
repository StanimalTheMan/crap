/*
   I do not know how I am going to implement most of my stuff. esp making sure users keep this a baseball forum and not a general forum if that's important for this project
   slugs and in general the specific routes idk yet
*/
require('./db');
require('./auth');
const myRouter = require('./routes/router');

const passport = require('passport');


const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//enable passport middleware
//aka start up passport and allow login sessions before defining/using routes
app.use(passport.initialize());
app.use(passport.session());

// enable sessions
const session = require('express-session');
const sessionOptions = {
    secret: 'mets...store this somewhere else',
    resave: true,
    saveUninitialized: true//look into this see if I will set this to false
};
app.use(session(sessionOptions));


//make app activate all route handlers so use router object like any other middleware
//middleware to make req.user available in context of every template
app.use(function(req, res, next) {
  res.locals.user = req.session.user; 

  next();
});

app.use(myRouter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// body parser setup
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));





app.listen(process.env.PORT || 3000);