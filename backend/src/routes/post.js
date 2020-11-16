const { Router } = require("express");
const router = Router();

const requireLogin = require('../middlewares/requireLogin');
const {createPost, getAllPost} = require('../controllers/posts.controllers');


router.post('/createpost', requireLogin, createPost);

router.route('/allpost')
    .get(getAllPost);


module.exports = router;