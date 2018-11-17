//separate routes and middleware from app.js idk
//routes is a separate object and is essentially a mini-application?
const express = require('express');
const router = express.Router();//Router() is not a constructor so no new keyword
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Diary = mongoose.model('Diary');
//require('./../auth');

const bodyParser = require('body-parser');


// body parser setup
router.use(bodyParser.urlencoded({ extended: false }));

//route handlers

//home page
router.get('/', (req, res) => {
    if (req.session.user) {
        Diary.find({userid: req.session.user.username}, function(err, diaries) {
            res.render('index', {diaries: diaries});
        });
    } else {
        res.render('index');
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
                res.redirect('/');
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
            res.render('login', {message: 'Login or Password is invalid.'});
        }
    })(req, res, next);
});

//add a new diary once logged in
router.get('/diaries/add', function(req, res, next) {
    if (req.session.user) {
        res.render('diary-add');
    } else {
        res.redirect('/login');
    }
});

router.post('/diaries/add', function(req, res, next) {
    if (req.session.user) {
        new Diary({
            userid: req.session.user.username,
            title: req.body.title,
            description: req.body.description
        }).save((saveErr) => {
            if (saveErr) {
                res.render('diary-add', {message: "Sorry could not register your diary. Try again."});
            } else {
                res.redirect('/');
            }
        });
    }
});

//to access one of your diaries to possibly add a new entry, read your past entries, etc.
router.get('/mydiaries/:slug', (req, res) => {
    Diary.findOne({slug: req.params.slug}, (err, diary) => {
        res.render('view-or-modify-diary', {diary});
    });
});

//export router
module.exports = router;