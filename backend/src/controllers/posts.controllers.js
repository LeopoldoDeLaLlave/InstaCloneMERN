const postCtrl = {};


const Post = require('../models/post');

//Creamos un post
postCtrl.createPost = async (req, res) => {

    const { title, body } = req.body;

    if (!title || !body) {
        res.status(422).json({ error: "Please add all the fields" });
    }

    req.user.password = undefined;
    const post = new Post({
        title,
        body,
        postedBy: req.user
    });

    try {
        const result = await post.save();
        res.json({ post: result });
    } catch (error) {
        res.json({ error });
    }

};


postCtrl.getAllPost = async (req, res) => {

    try {
        const posts = await Post.find().populate("postedBy", "_id name");
        res.json({ posts });
    } catch (error) {
        console.log("error");
    }

};

//Obtiene todos los posts de un usuario concreto
postCtrl.getUsersPosts = async (req, res)=>{

    try {
        const myPosts = await Post.find({postedBy:req.user._id}).populate("postedBy", "_id name");
        res.json({myPosts});
    } catch (error) {
        
    }
}


module.exports = postCtrl;