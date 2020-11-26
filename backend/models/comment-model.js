const mongo = require('mongoose');

const commmentSchema = new mongo.Schema({
    p_id :{type: mongo.Types.ObjectId , required : true , ref: 'Product'},
    user_id : {type : mongo.Types.ObjectId , required:true},
    name : {type : String, required :true},
    body :{type : String ,required: true},
    date : {type: Date , default : Date()}
});

module.exports = mongo.model('Comment',commmentSchema);