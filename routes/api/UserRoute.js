const express = require('express');
const router = express.Router();

// user model
const User = require('../../models/UserSchema');
const { route } = require('./items');

// login user
router.post('/login', (req, res) => {
    const newUSer = new User({
        username: req.body.username,
        password: req.body.password
    });
    newUSer.save().then((data) => res.json(data))
});

// // get user
// route.get('/')

module.exports = router;