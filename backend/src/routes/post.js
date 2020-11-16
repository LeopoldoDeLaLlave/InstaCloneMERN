const { Router } = require("express");
const router = Router();

const requireLogin = require('../middlewares/requireLogin');
const {createPost, getAllPost, getUsersPosts} = require('../controllers/posts.controllers');


router.post('/createpost', requireLogin, createPost);

router.route('/allpost')
    .get(getAllPost);


router.get('/mypost', requireLogin, getUsersPosts);


module.exports = router;