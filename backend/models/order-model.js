const mongo = require('mongoose');

const orderSchema = new mongo.Schema({
    o_id : {type: String , required: true},
    product : {type: String , required: true},
    quantity : {type: Number , required: true},
    order_date : {type: String ,required:true},
    total_amount : {type: Number , required: true},
    c_id : {type: String , required: true},
    order_confirmation: {type: Boolean , default:false},
    order_delivered: {type: Boolean , default:false}
});

module.exports = mongo.model('Order',orderSchema);