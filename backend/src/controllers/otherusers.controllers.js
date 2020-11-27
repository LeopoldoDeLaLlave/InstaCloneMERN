//Controla la relación entre usuarios

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


//Sigue a otro usuario
otheruserCtrl.putFollow = (req, res) => {


    try {
        User.findByIdAndUpdate(req.body.followID,{
            $push:{followers:req.user._id}
        }, {
            new:true
        },async(err, result)=>{
            if(err){
                return res.status(422).json({error:err})
            }
            const followingResult = await User.findByIdAndUpdate(req.user._id,{
                $push:{following:req.body.followID}
            }, {
                new:true
            });
            res.json({result:followingResult})
        });

        

    } catch (error) {
        return res.status(422).json({error})
    }
}




//Da unfollow a otro usuario
otheruserCtrl.putUnfollow = (req, res) => {


    try {
        User.findByIdAndUpdate(req.body.unfollowID,{
            $pull:{followers:req.user._id}
        }, {
            new:true
        },async(err, result)=>{
            if(err){
                return res.status(422).json({error:err})
            }
            const unfollowingResult = await User.findByIdAndUpdate(req.user._id,{
                $pull:{following:req.body.unfollowID}
            }, {
                new:true
            });
            res.json({result:unfollowingResult})
        });

        

    } catch (error) {
        return res.status(422).json({error})
    }
}

module.exports = otheruserCtrl;