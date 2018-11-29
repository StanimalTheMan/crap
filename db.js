const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');
const passportLocalMongoose = require('passport-local-mongoose');//add properties to user schema and static methods



// users
// * our site requires authentication...
// * so users have a username and 

const EntrySchema = new mongoose.Schema({
  title: String,//optional
  entry: {type: String, required: true},//start writing that essay of yours lol
  //diaryid: String,//redundant but helps me loop over and make links in view-modify-diary.hbs?
  date: {type: String, validate: [/\d\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])/], required: true}//{type: Date, default: Date.now}, USING TYPE DATA IS BETTER? //regex found on so
});

const DiarySchema = new mongoose.Schema({
  userid: String,//aka author
  title: String,//for example you want separate diaries for your medicine usage, your baseball career, your significant achievements, OR maybe you want everything in one diary for some reason
  description: String,
  entries: [EntrySchema]
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
//EntrySchema.plugin(URLSlugs('date', {field: 'slug'}));//DO I DO THIS?

mongoose.model('User', UserSchema);
mongoose.model('Diary', DiarySchema);
mongoose.model('Entry', EntrySchema);

// is the environment variable, NODE_ENV, set to PRODUCTION? 
let dbconf;
if (process.env.NODE_ENV === 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 const fs = require('fs');
 const path = require('path');
 const fn = path.join(__dirname, 'config.json');
 const data = fs.readFileSync(fn);

 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 const conf = JSON.parse(data);
 dbconf = conf.dbconf;
} else {
 // if we're not in PRODUCTION mode, then use
 dbconf = 'mongodb://localhost/sjc591';
}

mongoose.connect(dbconf);