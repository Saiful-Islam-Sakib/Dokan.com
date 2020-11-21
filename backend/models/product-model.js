const mongo = require('mongoose');
const { model } = require('./order-model');

const productSchema = new mongo.Schema({
    //p_id : {type:String},
    name : {type:String,required:true},
    brand: {type:String,required:true},
    price : {type:Number,required:true},
    category : {type:String,required:true},
    sub_category: {type:String,required:true},
    tag : [{type:String,required:true}],
    s_id : {type: mongo.Types.ObjectId,required:true, ref : 'Seller'},
});

module.exports = mongo.model('Product',productSchema);