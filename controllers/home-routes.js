// const router = require('express').Router();
// const { x, y} = require('../models');

// module.exports = router; 
const router = require('express').Router();

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