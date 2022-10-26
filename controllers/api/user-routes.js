// needs to be filled in with create new user and login and logout
const router = require('express').Router();
const { User, Moods } = require('../../models');

// POST ROUTES
// CREATE new user 
router.post('/signup', async (req, res) => {
    try {
      const dbUserData = await User.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = dbUserData.get({plain: true}).id;
  
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now signed up!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    // console.log(dbUserData);

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.get({plain: true}).id;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/mood', async (req, res) => {
  try {
    const dbUserMood = await Moods.create({
      mood: req.body.mood,
      userId: req.session.userId
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/mood', async (req, res) => {
  try {
    const dbUserMoods = await Moods.findAll({
      where: {
        userId: req.session.userId,
      }
    })
    res
    .status(200)
    .json({ dbUserMoods });
    console.log(res.json({ dbUserMoods }))
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router; 