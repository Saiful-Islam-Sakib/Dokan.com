const mongo = require('mongoose');

const orderSchema = new mongo.Schema({
    //o_id : {type: String , required: true},
    p_id : {type: mongo.Types.ObjectId , required: true, ref : 'Product'},
    p_name: {type:String,required:true},
    quantity : {type: Number , required: true},
    total_amount : {type: Number , required: true},
    c_id : {type: mongo.Types.ObjectId , required: true, ref:'Customer'},
    order_confirmation: {type: Boolean , default:false},
    order_delivered: {type: Boolean , default:false},
    order_rejected: {type: Boolean , default:false},
    s_id : {type: mongo.Types.ObjectId , required: true,ref:'Seller'},
    date : {type: Date , default : Date.now()},
    shop_name :{type :String, required:true},
    delivery_address : {type:String, required : true},
});

module.exports = mongo.model('Order',orderSchema);