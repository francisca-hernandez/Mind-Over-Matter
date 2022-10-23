const router = require('express').Router();
var session = require('express-session');
// const { user, mood } = require('../models');

// SignUp/Login
router.get('/', (req, res) => {
    res.render('login');
});


module.exports = router;