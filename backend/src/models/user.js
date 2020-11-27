const {Schema, model} = require('mongoose');
const {ObjectID}=Schema.Types;


const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    followers:[{type:ObjectID, ref:"User"}],
    following:[{type:ObjectID, ref:"User"}]

});

module.exports = model('User', userSchema);