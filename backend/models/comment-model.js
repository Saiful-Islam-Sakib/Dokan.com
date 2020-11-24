const mongo = require('mongoose');

const commmentSchema = new mongo.Schema({
    c_id : {type : mongo.Types.ObjectId , required:true},
    name : {type : String, required :true , ref : 'Customer'},
    date : {type: Date , default : Date()}
});

module.exports = mongo.model('Comment',commmentSchema);