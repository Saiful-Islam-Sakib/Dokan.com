const httpError = require('../models/http-errors');

const dummy_user = [
    {
        o_id : '1',
        products : ['p1','p2','p3','p4'],
        quantity : ['1','2','1','1'],
        total_amount : '1000',
        c_id : 'cus01',
        order_confirmation: 'true',
        order_delivered: 'false'
    }
];

const getOrderbyid = (req,res,next) =>{
    const order_id = req.params.oid;
    const order_info = dummy_user.find(a =>{
        return a.o_id == order_id;
    });

    if(!order_info){
        throw new httpError('Order not found',404);
    }
    res.json({order_info});
};

exports.getOrderbyid = getOrderbyid;