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
  username: String,
  hash: String,// a password hash using passport
  posts: [Post]//embedded documents?
});

const Post = new mongoose.Schema({
  author: {type: String, default: 'Anon'},
  date: {type: Date, default: Date.now},
  post: String
});

const Thread = new mongoose.Schema({
  //userid: String,
  title: String,
  author: {type: String, default: 'Anon'},
  date: {type: Date, default: Date.now},
  posts: [Post]//embedded documents
});

//Above looks like a generic forum how do I ensure it's baseball based?



// TODO: add remainder of setup for slugs, connection, registering models, etc. below