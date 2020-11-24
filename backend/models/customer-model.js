const mongo = require('mongoose');
const uniqueVali = require('mongoose-unique-validator');

const customerSchema = new mongo.Schema({
    f_name : {type : String, required: true},
    l_name : {type : String, required: true},
    email : {type : String ,required: true, unique:true},
    phone : {type : String, required: true, unique:true},
    gender : {type : String, required: true},
    birthday : {type : String, required: true},
    //city : {type : String, required: true},
    //area : {type : String, required: true},
    //place : {type : String, required: true},
    address : {type : String, required: true},
    //delivery_add : {type : String, required: true},
    password : {type : String, required:true},
    orders: [{type : mongo.Types.ObjectId, required:true, ref:'Order'}],
    comments: [{type:mongo.Types.ObjectId , required: true , ref : 'Comment'}]
});
customerSchema.plugin(uniqueVali);

module.exports = mongo.model('Customer',customerSchema);