const httpError = require('../models/http-errors');
const {validationResult} = require('express-validator');

let dummy_customer = [
    {
        c_id : 'cus1',
        f_name : 'Emon',
	    l_name: 'Haque',
        email : 'customer@gmail.com',
        phone : '01715566777',
        gender : 'male',
        birthday : '10-07-1993',
        city : 'Dhaka',
        area : 'Uttara',
        place : 'sector 4',
        address : '38/3 road no-16',
        delivery_add : '38/3 road no-16',
        password : '123456',
        orders: ['1','2']
    }
];

const getcusinfobyid = (req,res,next) =>{
    const cus_id = req.params.cid;
    const cus_info = dummy_customer.find(a =>{
        return a.c_id == cus_id;
    });
    if (!cus_info){
        throw new httpError('Could not find Customer.',404);
    }
    res.json({cus_info});
};

const customerSignup = (req,res,next) => {
    const err  = validationResult(req);
    if(!err.isEmpty()){
        console.log(err);
        throw new httpError('Invalid information submitted',422);
    }

    const {c_id,f_name,l_name,email,phone,gender,birthday,city,area,place,address,delivery_add,password} = req.body;
    const createdUser = {
        c_id,f_name,l_name,email,phone,gender,birthday,city,area,place,address,delivery_add,password
    };
    dummy_customer.push(createdUser);
    res.status(201).json({user : createdUser});
};

const updatecustomer = (req,res,next) =>{
  const {c_id,phone,city,area,place,address,delivery_add} = req.body;
  const cus_id = req.body.cid;
  
  const updateCusInfo = dummy_customer.find(p => p.id === cus_id);
  const customerIndex = dummy_customer.findIndex(p => p.id === cus_id);
  updateCusInfo.phone = phone;
  updateCusInfo.city = city;
  updateCusInfo.area = area;
  updateCusInfo.place = place;
  updateCusInfo.address = address;
  updateCusInfo.delivery_add = delivery_add;

  dummy_customer[customerIndex] = updateCusInfo;
  res.status(200).json({customer: updateCusInfo});
};

const deletecustomer = (req,res,next) =>{
    const cus_id = req.body.cid;
    dummy_customer = dummy_customer.filter( p => p.id !== cus_id);
    res.status(200).json({msg : 'Customer Deleted'});
};

const customerLogin = (req,res,next) => {
    const {email , phone , password} = req.body;
    const validCustomer = dummy_customer.find(p => (p.email === email || p.phone === phone ));
    if(!validCustomer || validCustomer.password !== password){
        throw new httpError('Could not identify Customer',401);
    }
    res.status(201).json({msg : 'Logged In'});
};

exports.getcusinfobyid = getcusinfobyid;
exports.customerSignup = customerSignup;
exports.updatecustomer = updatecustomer;
exports.deletecustomer = deletecustomer;
exports.customerLogin = customerLogin;