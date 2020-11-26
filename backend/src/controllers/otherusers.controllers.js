const bcrypt = require('bcryptjs');
const otheruserCtrl = {};
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Post = require('../models/post');

//Obtiene el perfil de otro usuario
otheruserCtrl.getUser = async (req, res) => {


    try {
        const user = await User.findOne({_id:req.params.id}).select("-password");
        Post.find({postedBy:req.params.id})
        .populate("postedBy", "_id name")
        .exec((error, posts)=>{
            if(error){
                return res.status(422).json({error})
            }
            res.json({user, posts});
        })

    } catch (error) {
        return res.status(404).json({error:"User not found"})
    }
}

module.exports = otheruserCtrl;