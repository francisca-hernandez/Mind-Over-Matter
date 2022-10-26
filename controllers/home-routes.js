const router = require('express').Router();
const { User } = require('../models');

// GET ROUTES


// SignUp/Login

router.get('/', (req, res) => {


    res.render('login', {
        loggedIn: req.session.loggedIn,
    })
});

router.get('/homepage', (req, res) => {


    res.render('homepage', {
        loggedIn: req.session.loggedIn,
        moods: req.session.mood
    })
});

router.get('/homepage/entries', (req, res) => {


    res.render('entries', {
        
        loggedIn: req.session.loggedIn,
        moods: req.session.mood
    })
});

    module.exports = router;