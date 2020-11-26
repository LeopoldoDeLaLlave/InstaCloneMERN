const { Router } = require("express");
const router = Router();

const requireLogin = require('../middlewares/requireLogin');
const { getUser} = require('../controllers/otherusers.controllers');

router.get('/user/:id', requireLogin, getUser);

module.exports = router;