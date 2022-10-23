// needs to be filled in with create new user and login and logout
const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user // login 
router.post('/', async (req, res) => {
    try {
      const dbUserData = await User.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


// Logout

// router.post('/logout', (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

module.exports = router; 