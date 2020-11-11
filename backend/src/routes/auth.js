const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");

const { signInUser, signUpUser } = require('../controllers/users.controllers');


router.route('/signin').
    post(signInUser);

router.route('/signup').
    post(signUpUser);

router.get('/', (req, res) => {
    res.send('Hello');
});

module.exports = router;