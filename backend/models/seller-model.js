const mongo  = require('mongoose');
const uniqueVali = require('mongoose-unique-validator');

const sellerSchema = new mongo.Schema({
    v_f_name : {type:String,required:true},
    v_l_name : {type:String,required:true},
    email : {type:String,required:true,unique:true},
    phone : {type:String,required:true,unique:true},
    trade_lic_no : {type:String,required:true},
    birthday : {type:String,required:true},
    v_city : {type:String,required:true},
    v_area : {type:String,required:true},
    v_address : {type:String,required:true},
    nid : {type:String,required:true},
    password : {type:String,required:true},	
    b_acc: {type:String,required:true}, 
    b_acc_no: {type:String,required:true},
    bank : {type:String,required:true},
    branch : {type:String,required:true},
    sh_name: {type:String,required:true},
    sh_city : {type:String,required:true},
    sh_area : {type:String,required:true},
    sh_place : {type:String,required:true},
    sh_area_pc : {type:String,required:true},
    products: [{type: mongo.Types.ObjectId, require: true, ref: 'Product'}],
    orders: [{type: mongo.Types.ObjectId,require:true ,ref:'Order'}]
});
sellerSchema.plugin(uniqueVali);

module.exports = new mongo.model('Seller',sellerSchema);