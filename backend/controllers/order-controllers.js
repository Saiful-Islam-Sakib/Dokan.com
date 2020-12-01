const httpError = require('../models/http-errors');
const {validationResult} = require('express-validator');
const order = require('../models/order-model');
const customer = require('../models/customer-model');
const mongo  = require('mongoose');
const product = require('../models/product-model');
const seller_model= require('../models/seller-model');

let dummy_order = [
    {
        o_id : '1',
        product : 'p1',
	    quantity : '2',
        total_amount : '1000',
        c_id : 'cus1',
        order_confirmation: 'false',
        order_delivered: 'false'
    }
];

const createNewOrder = async (req,res,next) =>{
    const err  = validationResult(req);
    if(!err.isEmpty()){
        console.log(err);
        throw new httpError('Something wrong in Order',422);
    }
    //const cus_id = req.body.cid;
    const {p_id,quantity,total_amount,c_id,order_confirmation,order_delivered,delivery_address} = req.body;

    // const createdorder = new order ({p_id,quantity,total_amount,c_id,order_confirmation,order_delivered,order_date});
    let customerexist;
    try{
        customerexist = await customer.findById(c_id);
    }catch(err){
        const erro = new httpError('Could not make an order',501);
        return next(erro);
    }
    if(!customerexist){
        const erro = new httpError('Could not find user',502);
        return next(erro);
    }
    let size = p_id.length;
    for(i = 0; i < size ; i++){
        let productexist;
        try{
            productexist = await product.findById(p_id[i]);
        }catch(err){
            const erro = new httpError('Could not make an order',503);
            return next(erro);
        }
        if(!productexist){
            const erro = new httpError('Could not find product',504);
            return next(erro);
        }
        let s_id = productexist.s_id;
        let sellerexist;
        try{
            sellerexist = await seller_model.findById(s_id);
        }catch(err){
            const erro = new httpError('Could not make an order',505);
            return next(erro);
        }
        if(!sellerexist){
            const erro = new httpError('Could not find product',506);
            return next(erro);
        }
        let shop_name = sellerexist.sh_name;
        let pname = productexist.name;
        const createdorder = new order ({p_id : p_id[i], p_name : pname,
            quantity : quantity[i], total_amount : total_amount[i],
            c_id,
            order_confirmation,order_delivered,
            s_id , delivery_address ,shop_name});
        //console.log(customerexist);
        try{
            //await createdorder.save();
            const session = await mongo.startSession();
            session.startTransaction();
            await createdorder.save({session: session});
            customerexist.orders.push(createdorder);
            await customerexist.save({session: session});
            sellerexist.orders.push(createdorder);
            await sellerexist.save({session: session});
            await session.commitTransaction();
        }catch(err){
            const erro = new httpError('Could not place an order',507);
            return next(erro);
        }
    }
    //dummy_order.push(createdorder);
    res.status(201).json({data : 'Your Order has been placed'});
};

const getOrderbyid = async (req,res,next) =>{
    const cus_id = req.params.c_id;
    let cus_orders;
    try{
        //orders = await order.find({c_id : cus_id});
        cus_orders = await customer.findById(cus_id).populate('orders');
    }catch(err){
        const erro = new httpError('Could not find any order',500);
        return next(erro);
    }
    if(!cus_orders.orders || cus_orders.orders === 0){
        //console.log(orders);
        const erro = new httpError('Could not find any order',500);
        return next(erro)
        //throw new httpError('Order not found',404);
    }
    res.json({data: cus_orders.toObject({getters :true})});
    //res.json({msg : orders});
};

const orderConfirmation = async (req,res,next) => {
    const err  = validationResult(req);
    if(!err.isEmpty()){
        console.log(err);
        throw new httpError('Not appropiate confirmation was sent',204);
    }
    const { order_confirmation,o_id } = req.body;
    const order_id = o_id;
    let orderinfo;
    try{
        orderinfo = await order.findById(order_id);
        //console.log(orderinfo);
    }catch(err){
        const erro = new httpError('Could not find any order',500);
        return next(erro);
    }
    if(orderinfo.order_confirmation === order_confirmation){
        //console.log(orderinfo.order_confirmation);
        //console.log(order_confirmation);
        return res.json('Already confirmed order');
    }
    orderinfo.order_confirmation = order_confirmation;
    try{
        await orderinfo.save();
    }catch(err){
        const erro = new httpError('Something went wrong',500);
        return next(erro);
    }
    res.status(201).json({data : 'Your order has been confirmed'});
};

const deleteOrder = async (req,res,next) => {
    const order_id = req.params.oid;
    let orderinfo,cid,cus,sid,seller;
    try{
        orderinfo = await order.findById(order_id);
        cid = orderinfo.c_id;
        sid = orderinfo.s_id;
        cus = await customer.findById(cid);
        seller = await seller_model.findById(sid); 
    }catch(err){
        const erro = new httpError('Order not found',501);
        return next(erro);
    }
    if(!orderinfo){
        const erro = new httpError('Order not found',502);
        return next(erro);
    }
    if(orderinfo.order_confirmation === true){
        return res.json({msg : 'Your order is already confirmed'});
    }
    try{
        const session = await mongo.startSession();
        session.startTransaction();
        await orderinfo.remove({session : session});
        cus.orders.pull(orderinfo);
        await cus.save({session : session});
        seller.orders.pull(orderinfo);
        await seller.save({session: session});
        await session.commitTransaction();
    }catch(err){
        const erro = new httpError('Something went wrong',503);
        return next(erro);
    }
    res.status(201).json({data : 'Successfully deleted order'});
};

const orderDelivered = async (req,res,next) => {
    const err  = validationResult(req);
    if(!err.isEmpty()){
        console.log(err);
        throw new httpError('Not appropiate confirmation was sent',204);
    }
    const { o_id,order_delivered} = req.body;
    const order_id = o_id;
    let orderinfo;
    try{
        orderinfo = await order.findById(order_id);
    }catch(err){
        const erro = new httpError('Could not find any order',500);
        return next(erro);
    }
    if(orderinfo.order_delivered === order_delivered){
        return res.json('Delivery already confirmed');
    }
    orderinfo.order_delivered = order_delivered;
    try{
        console.log('done');
        await orderinfo.save();
    }catch(err){
        const erro = new httpError('Something went wrong',500);
        return next(erro);
    }
    res.status(201).json({data : 'Order delivered'});
};

const orderRejected = async (req,res,next) =>{
    const err  = validationResult(req);
    if(!err.isEmpty()){
        console.log(err);
        throw new httpError('Not appropiate confirmation was sent',204);
    }
    const { o_id,order_rejected} = req.body;
    const order_id = o_id;
    let orderinfo;
    try{
        orderinfo = await order.findById(order_id);
    }catch(err){
        const erro = new httpError('Could not find any order',500);
        return next(erro);
    }
    console.log(orderinfo.order_confirmation+'    '+orderinfo.order_delivered+ '   '+orderinfo.order_rejected);
    if(orderinfo.order_rejected === true){
        return res.status(406).json({data : 'Already rejected order'});
    }
    else if(orderinfo.order_confirmation === false && orderinfo.order_delivered === false){
        orderinfo.order_rejected = order_rejected; 
        try{
            await orderinfo.save();
        }catch(err){
            const erro = new httpError('Something went wrong',501);
            return next(erro);
        }
        return res.status(201).json({data: 'Order rejected'});
    }
    res.status(406).json({data : 'Can not reject order'});
};

exports.getOrderbyid = getOrderbyid;
exports.orderConfirmation = orderConfirmation;
exports.createNewOrder = createNewOrder;
exports.deleteOrder = deleteOrder;
exports.orderDelivered = orderDelivered;
exports.orderRejected = orderRejected;