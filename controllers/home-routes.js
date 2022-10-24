const router = require('express').Router();
const { User } = require('../models');

// GEt ROUTES


// SignUp/Login







router.get('/', (req, res) => {


    res.render('login', {
        // moods? 
        loggedIn: req.session.loggedIn,
    })
});

router.get('/homepage', (req, res) => {


    res.render('homepage', {
        // moods? 
        loggedIn: req.session.loggedIn,
    })
});


    // OR

    // router.get('/login.js', async (req, res) => {
    //     res.render('login');
    // })

    // router.get('/login.js', (req, res) => {
    //     res.render('signup');
    // });



    module.exports = router;