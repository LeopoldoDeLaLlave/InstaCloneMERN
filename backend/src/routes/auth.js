const { Router } = require("express");
const router = Router();
//const mongoose = require("mongoose");
const requireLogin = require('../middlewares/requireLogin');

const { signInUser, signUpUser, accesToProtected } = require('../controllers/users.controllers');


router.route('/signin').
    post(signInUser);

router.route('/signup').
    post(signUpUser);

router.get('/', (req, res) => {
    res.send('Hello');
});

router.get('/protected',requireLogin, (req, res) => {
    res.send('Hello user');
});


module.exports = router;