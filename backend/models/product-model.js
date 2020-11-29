const mongo = require('mongoose');

const productSchema = new mongo.Schema({
    //p_id : {type:String},
    name : {type:String,required:true},
    brand: {type:String,required:true},
    price : {type:Number,required:true},
    category : {type:String,required:true},
    sub_category: {type:String,required:true},
    tag : [{type:String,required:true}],
    s_id : {type: mongo.Types.ObjectId,required:true, ref : 'Seller'},
    img : {type:String,required:true},
    offer_price :{type:Number, default:''},
    comments:[{type:mongo.Types.ObjectId, ref: 'Comment'}],
    rating : {type: Number,default : 0.0},
    rating_count : {type: Number , default : 0}
});

module.exports = mongo.model('Product',productSchema);