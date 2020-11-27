const httpError = require('../models/http-errors');
const {validationResult} = require('express-validator');
const customer = require('../models/customer-model');
const product = require('../models/product-model');
const comment = require('../models/comment-model');
const mongo = require('mongoose');

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

const customerinfo = async (req,res,next) =>{
    const userid = req.params.id;
    let customerinfo;
    try{
        customerinfo = await customer.findById(userid).populate('orders');
    }catch(err){
        const erro = new httpError('Somthing went wrong',422);
        return next(erro);
    }
    if(!customerinfo || customerinfo.orders.length === 0){
        throw new httpError('User not exist',404);
    }
    res.status(200).json({msg: customerinfo.orders.map(orders => orders.toObject({getters :true}))});
};

const customerSignup = async (req,res,next) => {
    const err  = validationResult(req);
    if(!err.isEmpty()){
        console.log(err);
        const erro = new httpError('Customer Signup failed,please try again',422);
        return next(erro);
    }

    const {f_name,l_name,email,phone,gender,birthday,address,password} = req.body;
            //city,area,place,,delivery_add
    let existingUser1;
    let existingUser2;
    try{
        existingUser1 = await customer.findOne({email : email});
        existingUser2 = await customer.findOne({phone : phone});
    }catch(err){
        const erro = new httpError('Customer Signup failed,please try again',500);
        return next(erro);
    }
    if(existingUser1 || existingUser2 ){
        const erro = new httpError('Customer already exist',421);
        return next(erro);
    }

    const createdUser =  new customer({
        f_name,l_name,email,phone,gender,birthday,address,password,orders:[]
    });
        //,city,area,place,delivery_add
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
    //console.log(updateCusInfo);
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

//This will be used by the admin
const deletecustomer = (req,res,next) =>{
    const cus_id = req.body.cid;
    if(!dummy_customer.filter( p => p.id !== cus_id)){
        throw new httpError('Could not find customer!',404);
    }
    dummy_customer = dummy_customer.filter( p => p.id !== cus_id);
    res.status(200).json({msg : 'Customer Deleted'});
};

const customerLogin = async(req,res,next) => {
    const {email , phone , password} = req.body;
    /*
    const validCustomer = dummy_customer.find(p => (p.email === email || p.phone === phone ));
    if(!validCustomer || validCustomer.password !== password){
        throw new httpError('Could not identify Customer',401);
    } */
    let existingUser1;
    let existingUser2;
    if(email){
        try{
            existingUser1 = await customer.findOne({email : email});
        }catch(err){
            const erro = new httpError('Customer Login failed,please try again',500);
            return next(erro);
        }
        //console.log(existingUser1,'here');
        if(!existingUser1 || existingUser1.password !== password ){
            const erro = new httpError('Invalid credentials ,could not log in',401);
            return next(erro);
        }
        existingUser1.password = null;
        res.status(201).json({msg : existingUser1});    
    }
    if(phone){
        try{
            existingUser2 = await customer.findOne({phone : phone});
        }catch(err){
            const erro = new httpError('Customer Login failed,please try again',500);
            return next(erro);
        }
        //console.log(existingUser2,'there');
        if(!existingUser2 || existingUser2.password !== password ){
            const erro = new httpError('Invalid credentials ,could not log in',401);
            return next(erro);
        }
        existingUser2.password = null;
        res.status(201).json({msg : existingUser2});
    }
};

const commentOnproduct = async(req,res,next) =>{
    const err  = validationResult(req);
    if(!err.isEmpty()){
        console.log(err);
        throw new httpError('Something wrong in Comment',422);
    }
    const {p_id,user_id,body} = req.body;
    let productexist;
    try{
        productexist = await product.findById(p_id);
    }catch(err){
        const erro = new httpError('Something went wrong on product',404);
        return next(erro);
    }
    if(!productexist){
        const erro = new httpError('Product not exist',500);
        return next(erro);
    }
    let customerexist;
    try{
        customerexist = await customer.findById(user_id);
    }catch(err){
        const erro = new httpError('Something went wrong on customer',404);
        return next(erro);
    }
    if(!customerexist){
        const erro = new httpError('Customer not exist',500);
        return next(erro);
    }
    const name = customerexist.f_name + ' '+ customerexist.l_name;
    const createNewComment = new comment({p_id,user_id,name,body});
    try{
        const session = await mongo.startSession();
        session.startTransaction();
        await createNewComment.save({session: session});
        productexist.comments.push(createNewComment);
        await productexist.save({session: session});
        await session.commitTransaction();
    }catch(err){
        const erro = new httpError('Could not comment on product',403);
        return next(erro);
    }
    res.status(201).json({data : 'Your comment was posted'});
};

const Search = async(req,res,next) =>{
    const name = req.params.name;
    let result;
    try{
        //result = await product.find({name : {$regex : name , $options: "si" }});
        //result = await product.aggregate([{$match : { name : name }}]);
        //result = await product.aggregate([{$regexMatch: { input: "$name", regex: /shaad/ ,options:"i"}}]);
        //result = await product.aggregate().match({name : name}).pipeline();
        console.log('here');
    }catch(err){
        const erro = new httpError('Something went wrong',403);
        return next(erro);
    }
    res.status(201).json({msg : result}); 
};

exports.customerinfo = customerinfo;
exports.customerSignup = customerSignup;
exports.updatecustomer = updatecustomer;
exports.deletecustomer = deletecustomer;
exports.customerLogin = customerLogin;
exports.changePassword = changePassword;
exports.commentOnproduct = commentOnproduct;
exports.Search = Search;