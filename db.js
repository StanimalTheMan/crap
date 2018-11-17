const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');
const passportLocalMongoose = require('passport-local-mongoose');//add properties to user schema and static methods



// users
// * our site requires authentication...
// * so users have a username and 

const EntrySchema = new mongoose.Schema({
  title: String,//optional
  entry: String,//start writing that essay of yours lol
  diaryid: String,
  date: {type: String, validate: [/\d\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])/]},//{type: Date, default: Date.now}, USING TYPE DATA IS BETTER?
});

const DiarySchema = new mongoose.Schema({
  userid: String,//aka author
  title: String,//for example you want separate diaries for your medicine usage, your baseball career, your significant achievements, OR maybe you want everything in one diary for some reason
  description: String
  //entries: [EntrySchema]
});

const UserSchema = new mongoose.Schema({
  //username provided by authentication plugin
  // password hash provided by authentication plugin
  //username: String,//this suffices no first name or last name in my diary app
  //password: String,// a password hash using passport
  //diaries: [DiarySchema]//embedded documents?
});

// TODO: add remainder of setup for slugs, connection, registering models, etc. below
UserSchema.plugin(passportLocalMongoose);
DiarySchema.plugin(URLSlugs('title', {field: 'slug'}));

mongoose.model('User', UserSchema);
mongoose.model('Diary', DiarySchema);
mongoose.model('Entry', EntrySchema);

mongoose.connect('mongodb://localhost/finalproject');