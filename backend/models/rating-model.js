const mongo = require('mongoose');

const ratingSchema = new mongo.Schema({
    p_id : {type : mongo.Types.ObjectId , required: true},
    c_id : {type : mongo.Types.ObjectId , required: true, ref : 'Customer'},
    rating : {type : Number , required : true}
});

module.exports = mongo.model('Rating',ratingSchema);