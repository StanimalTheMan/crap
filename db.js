// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');

//in middleware, parse csv file and manually make Allstar and put it into database?
const Allstar = new mongoose.Schema({//At the moment, I do not know how to make the app case insensitive for when the user puts in for example david wright, my code and knowledge will probably NOT count that as correct?
    firstName: String,
    lastName: String,
    position: String,
    year: Number
});
// users
// * our site requires authentication...
// * so users have a username and password
// * they also can have 0 or more lists
const User = new mongoose.Schema({
  // username provided by authentication plugin
  // password hash provided by authentication plugin
  username: String,
  hash: String,// a password hash
  points: Number,// maximum number of points aka user got each all star entry (first name, last name, position (pitcher/batter), year)
  fan: Boolean // points >= 22 means you are a fan
});

//Is it unwise to make a leaderboard schema?



// TODO: add remainder of setup for slugs, connection, registering models, etc. below