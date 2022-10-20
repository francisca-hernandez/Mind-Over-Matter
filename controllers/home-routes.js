// const router = require('express').Router();
// const { x, y} = require('../models');

// module.exports = router; 
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('login');
});

module.exports = router;