//separate routes and middleware from app.js idk
//routes is a separate object and is essentially a mini-application?
const express = require('express');
const router = express.Router();//Router() is not a constructor so no new keyword
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Diary = mongoose.model('Diary');
const Entry = mongoose.model('Entry');


const bodyParser = require('body-parser');


// body parser setup
router.use(bodyParser.urlencoded({ extended: false }));

//callback for reduce
const reducer = (accumulator, currVal) => ++accumulator;


//route handlers

//home page
router.get('/', (req, res) => {
    if (req.session.user) {
        Diary.find({userid: req.session.user.username}, function(err, diaries) {
            res.render('index', {diaries: diaries});
        });
    } else {
        //use hof reduce to display total number of users on site?
        //HOF USES 1-3
        User.find(function(err, users) {
            const totalUsersRegistered = users.reduce(reducer, 0);
            Diary.find(function(err, diaries) {
                const totalDiaries = diaries.reduce(reducer, 0);
                const activeDiaries = diaries.filter(diary => diary.entries.length >= 1);
                res.render('index', {tot: totalUsersRegistered, totd: totalDiaries, started: activeDiaries.length});
            });
        });
    }
});

//register
router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', function(req, res) {//test if this code works
    User.register(new User({username:req.body.username}), //will change this code as this is from docs and slides for now
    req.body.password, function(err, user){
        if (err) {
            res.render('register',{message:'Your registration information is not valid'});
        } else {
            passport.authenticate('local')(req, res, function() {
                //res.redirect('/');
                req.logIn(user, function (err) {
                    //console.log(user);
                    req.session.user = user;
                    //console.log(req.user);
                    res.redirect('/');//success
                });
            });
        }
    }); 
});

//login
router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user) {
        if (user) {
            //console.log("success");
            req.logIn(user, function (err) {
                //console.log(user);
                req.session.user = user;
                //console.log(req.user);
                res.redirect('/');//success
            });
        } else {
            res.render('login', {message: 'Username or Password is invalid.'});
        }
    })(req, res, next);
});

//add a new diary once logged in
router.get('/diaries/add', function(req, res) {
    if (req.session.user) {
        res.render('diary-add');
    } else {
        res.redirect('/login');
    }
});

router.post('/diaries/add', function(req, res) {
    if (req.session.user) {
        new Diary({
            userid: req.session.user.username,
            title: req.body.title,
            description: req.body.description
        }).save((saveErr) => {
            if (saveErr) {
                console.log(saveErr);
                res.render('diary-add', {message: "Sorry could not register your diary. Try again."});
            } else {
                res.redirect('/');
            }
        });
    }
});

//to access one of your diaries to possibly add a new entry, read your past entries, etc.
router.get('/mydiaries/:slug', (req, res) => {
    if (req.session.user) {
        Diary.findOne({slug: req.params.slug}, (err, diary) => {
            //console.log(req.params.slug);
            res.render('view-or-modify-diary', {diaryname: diary.title.toUpperCase(), entries: diary.entries});
            
        });
    } else {
        res.redirect('/');
    }
});


router.post('/mydiaries/:slug', (req, res) => {
    new Entry({
        title: req.body.title,
        date: req.body.date,
        entry: req.body.entry
    }).save((saveErr) => {
        if (saveErr) {
            //console.log(saveErr);
            res.render('view-or-modify-diary', {message: 'Error saving'});
        } else {
            console.log(req.params.slug);
            //console.log(req.session.user.username);
            Diary.findOneAndUpdate({userid: req.session.user.username, slug: req.params.slug}, {$push: {entries: {title: req.body.title, date: req.body.date, entry: req.body.entry}}}, function(err, diary, count) {
                //console.log(err, diary, count);
            });
            res.redirect('/');//maybe not the best redirect
        }
    });
});

//LOGOUT w/ help from passport docs - http://www.passportjs.org/docs/logout/
//and good ol' https://stackoverflow.com/questions/13758207/why-is-passportjs-in-node-not-removing-session-on-logout
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        //console.log(err);
        res.redirect('/');
    });
    /*
    req.logout();
    delete req.user;
    res.redirect('/');//can fire before session is destroyed?
    */
});

//export router
module.exports = router;