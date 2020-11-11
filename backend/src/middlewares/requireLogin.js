const jwt = require('jsonwebtoken');
const User = require('../models/user');




module.exports = async(req, res, next)=>{

    const{authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({error:"Not allow"});
    }

    const token = authorization.replace("Bearer ", "");
    const jwtSecret = process.env.JSW_SECRET;
    jwt.verify(token, jwtSecret, (err, payload)=>{
        if(err){
            return res.status(401).json({error:"You must be loged in"});
        }

        const {_id } = payload;
        User.findById(_id).then(userData=>{
            req.user = userData;
        next();
        });
        
    });
};