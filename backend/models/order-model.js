const mongo = require('mongoose');

const orderSchema = new mongo.Schema({
    //o_id : {type: String , required: true},
    p_id : {type: mongo.Types.ObjectId , required: true, ref : 'Product'},
    quantity : {type: Number , required: true},
    order_date : {type: String ,required:true},
    total_amount : {type: Number , required: true},
    c_id : {type: mongo.Types.ObjectId , required: true, ref:'Customer'},
    order_confirmation: {type: Boolean , default:false},
    order_delivered: {type: Boolean , default:false},
    s_id : {type: mongo.Types.ObjectId , required: true}
});

module.exports = mongo.model('Order',orderSchema);