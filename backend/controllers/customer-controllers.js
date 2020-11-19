const httpError = require('../models/http-errors');
const {validationResult} = require('express-validator');
const customer = require('../models/customer-model');
const { findById } = require('../models/customer-model');

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

const getcusinfobyid = async (req,res,next) =>{
    const cus_id = req.params.cid;
    let cus_info; 
    try{
       cus_info = await customer.findById(cus_id);
    }catch(err){
        const erro = new httpError('Something went wrong,could not find customer information',500);
        return next(erro);
    }
    if (!cus_info){
        throw new httpError('Could not find Customer.',404);
    }
    res.json({cus_info : cus_info.toObject({getters : true})});
};

const customerSignup = async (req,res,next) => {
    const err  = validationResult(req);
    if(!err.isEmpty()){
        console.log(err);
        throw new httpError('Invalid information submitted',422);
    }

    const {c_id,f_name,l_name,email,phone,gender,birthday,city,area,place,address,delivery_add,password} = req.body;

    let existingUser;

    try{
        existingUser = await customer.findOne({email : email});
    }catch(err){
        const erro = new httpError('Customer Signup failed,please try again',500);
        return next(erro);
    }
    if(existingUser){
        const erro = new httpError('Customer already exist',422);
        return next(erro);
    }

    const createdUser =  new customer({
        c_id,f_name,l_name,email,phone,gender,birthday,city,area,place,address,delivery_add,password
    });
    try{
        await createdUser.save();
    }catch(err){
        const erro = new httpError('Customer Signup failed',500);
        return next(erro);
    }
    res.status(201).json({user : createdUser.toObject({getters:true})});
};

const updatecustomer = async (req,res,next) =>{
    const err = validationResult(req);
    if(!err.isEmpty()){
        console.log(err);
        throw new httpError('Invalid information',422);
    }
    const {c_id,phone,city,area,place,address,delivery_add} = req.body;
    const cus_id = req.params.cid;

    let updateCusInfo;
    try{
        updateCusInfo = await customer.findById(cus_id);
    }catch(err){
        const erro = new httpError('Something went wrong',500);
        return next(erro);
    }   
    
    //const updateCusInfo = dummy_customer.find(p => p.id === cus_id);
    //const customerIndex = dummy_customer.findIndex(p => p.id === cus_id);
    updateCusInfo.phone = phone;
    updateCusInfo.city = city;
    updateCusInfo.area = area;
    updateCusInfo.place = place;
    updateCusInfo.address = address;
    updateCusInfo.delivery_add = delivery_add;

    //dummy_customer[customerIndex] = updateCusInfo;
    try{
        await updateCusInfo.save();
    }catch(err){
        const erro = new httpError('Sorry could not update customer info',500);
        return next(erro);
    }
    res.status(200).json({customer: updateCusInfo.toObject({getters: true})});
};

const changePassword = async (req,res,next) =>{
    const err = validationResult(req);
    if(!err.isEmpty()){
        console.log(err);
        throw new httpError('Invalid information',422);
    }
    const cus_id = req.params.cid;
    const {prevPassword, newPassword} = req.body;
    let cusinfo;
    try{
        cusinfo = await customer.findById(cus_id);
    }catch(err){
        const erro = new httpError('Something went wrong',500);
        return next(erro);
    }
    if(cusinfo.password !== prevPassword){
        console.log(cusinfo.password);
        console.log(prevPassword);
        return res.json({msg: 'Your password did not match.'})
    }

    cusinfo.password = newPassword;

    try{
        await cusinfo.save();
    }catch(err){
        const erro = new httpError('Something went wrong,could not update password',500);
        return next(erro);
    }
    res.status(200).json({msg: 'Successfully changed password'});
};

const deletecustomer = (req,res,next) =>{
    const cus_id = req.body.cid;
    if(!dummy_customer.filter( p => p.id !== cus_id)){
        throw new httpError('Could not find customer!',404);
    }
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
exports.changePassword = changePassword;