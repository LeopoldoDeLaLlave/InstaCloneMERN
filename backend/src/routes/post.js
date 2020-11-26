const { Router } = require("express");
const router = Router();

const requireLogin = require('../middlewares/requireLogin');
const {createPost, getAllPost, getUsersPosts, putLike, checkLikes, putUnlike} = require('../controllers/posts.controllers');


router.post('/createpost', requireLogin, createPost);

router.get('/allpost', requireLogin, getAllPost);


router.get('/mypost', requireLogin, getUsersPosts);

router.put('/like', requireLogin, putLike);

router.put('/unlike', requireLogin, putUnlike);

router.put('/checklikes', requireLogin, checkLikes);



module.exports = router;