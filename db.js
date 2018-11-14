// 1ST DRAFT DATA MODEL
//MLB Free Agent Frenzy Forum
//how do I make sure an user posts only on baseball and/or implement ban policy?  is it ok if i don't?
const mongoose = require('mongoose');


// users
// * our site requires authentication...
// * so users have a username and password

const User = new mongoose.Schema({
  // username provided by authentication plugin
  // password hash provided by authentication plugin
  username: String,//this suffices no first name or last name in my diary app
  hash: String,// a password hash using passport
  diaries: [Diary]//embedded documents?
});

const Diary = new mongoose.Schema({
  title: String,//for example you want separate diaries for your medicine usage, your baseball career, your significant achievements, OR maybe you want everything in one diary for some reason
  author: {type: String},//most likely author will be username
  date: {type: String, validate: [/\d\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])/]},//{type: Date, default: Date.now},
  entries: [Entry]
});

const Entry = new mongoose.Schema({
  title: String,//optional
  entry: String//start writing that essay of yours lol

});

//Above looks like a generic forum how do I ensure it's baseball based?



// TODO: add remainder of setup for slugs, connection, registering models, etc. below