const httpError = require('../models/http-errors');

let dummy_order = [
    {
        o_id : '1',
        product : 'p1',
	    quantity : '2',
        total_amount : '1000',
        c_id : 'cus01',
        order_confirmation: 'false',
        order_delivered: 'false'
    }
];

const createNewOrder = (req,res,next) =>{
    const cus_id = req.body.cid;
    const {o_id,product,quantity,total_amount,c_id,order_confirmation,order_delivered} = req.body;

    const createdorder = {o_id,product,quantity,total_amount,c_id,order_confirmation,order_delivered};
    dummy_order.push(createdorder);
    res.status(201).json({msg : 'Your Order has been placed'});
};

const getOrderbyid = (req,res,next) =>{
    const order_id = req.params.oid;
    const order_info = dummy_order.find(a =>{
        return a.o_id == order_id;
    });

    if(!order_info){
        throw new httpError('Order not found',404);
    }
    res.json({order_info});
};

const orderConfirmation = (req,res,next) => {
    const { order_confirmation } = req.body;
    const order_id = req.body.oid;
    const updateOrderConf = dummy_order.find(p => p.id === order_id);
    const orderIndex = dummy_order.findIndex(p => p.id === order_id);
    updateOrderConf.order_confirmation = order_confirmation;
    dummy_order[orderIndex] = updateOrderConf;
    res.status(201).json({msg : 'Your order has been confirmed'});
};

const deleteOrder = (req,res,next) => {
    const order_id = req.body.oid;
    const ordCon = dummy_order.find(p => p.id === order_id);
    //console.log(ordCon);
    if(ordCon.order_confirmation == 'false'){
        dummy_order = dummy_order.filter(p => p.id !== order_id);
        return res.status(200).json({msg : 'Order Cancelled'});
    }
    res.status(401).json({msg : 'Sorry your order has been confirmed'});
};

const orderDelivered = (req,res,next) => {
    const { order_delivered } = req.body;
    const order_id = req.body.oid;
    const updateOrderDel = dummy_order.find(p => p.id === order_id);
    const orderIndex = dummy_order.findIndex(p => p.id === order_id);
    updateOrderDel.order_delivered = order_delivered;
    dummy_order[orderIndex] = updateOrderDel;
    res.status(201).json({msg : 'Your order was delivered'});
};

exports.getOrderbyid = getOrderbyid;
exports.orderConfirmation = orderConfirmation;
exports.createNewOrder = createNewOrder;
exports.deleteOrder = deleteOrder;
exports.orderDelivered = orderDelivered;