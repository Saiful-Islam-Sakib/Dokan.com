const express = require('express');

const router = express.Router();

const dummy_user = [
    {
        o_id : '1',
        products : ['p1','p2','p3','p4'],
        total_amount : '1000',
        c_id : 'cus01',
        order_confirmation: 'true',
        order_delivered: 'false'
    }
];

router.get('/cus01/:oid',(req,res,next) =>{
    const order_id = req.params.oid;
    const order_info = dummy_user.find(a =>{
        return a.o_id == order_id;
    });
    res.json({order_info});
});

module.exports = router;
