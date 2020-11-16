const {Schema, model} = require('mongoose');
const {ObjectID}=Schema.Types;

const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        default:"No photo"
    }, 
    postedBy:{
        type:ObjectID,
        ref:"User"
    }

});

module.exports = model('Post', postSchema);