const mongo = require('mongoose');

const customerSchema = new mongo.Schema({
    c_id : {type : String, required: true},
    f_name : {type : String, required: true},
    l_name : {type : String, required: true},
    email : {type : String ,required: true},
    phone : {type : String, required: true},
    gender : {type : String, required: true},
    birthday : {type : String, required: true},
    city : {type : String, required: true},
    area : {type : String, required: true},
    place : {type : String, required: true},
    address : {type : String, required: true},
    delivery_add : {type : String, required: true},
    password : {type : String, required:true},
    orders: {type: String}
});

module.exports = mongo.model('Customer',customerSchema);