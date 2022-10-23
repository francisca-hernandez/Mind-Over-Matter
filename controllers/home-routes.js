const router = require('express').Router();
var session = require('express-session');
// const { user, mood } = require('../models');

// SignUp/Login
router.get('/', (req, res) => {
    res.render('login');
// Homepage
// res.render('homepage', {
//             // moods? 
//             loggedIn: req.session.loggedIn,
//           })
});


// OR

// router.get('/', (req, res) => {
//     res.render('homepage', {
//         // moods? 
//         loggedIn: req.session.loggedIn,
//       })
// });



module.exports = router;