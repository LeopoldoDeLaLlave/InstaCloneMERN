const { Router } = require("express");
const router = Router();

const requireLogin = require('../middlewares/requireLogin');
const { createPost,
    getAllPost,
    getUsersPosts,
    putLike,
    checkLikes,
    putUnlike,
    putComment } = require('../controllers/posts.controllers');


router.post('/createpost', requireLogin, createPost);

router.get('/allpost', requireLogin, getAllPost);


router.get('/mypost', requireLogin, getUsersPosts);

router.put('/like', requireLogin, putLike);

router.put('/unlike', requireLogin, putUnlike);

router.put('/checklikes', requireLogin, checkLikes);

router.put('/comment', requireLogin, putComment);





module.exports = router;