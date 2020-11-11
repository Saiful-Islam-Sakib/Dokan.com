const express = require('express');

const router = express.Router();

const httpError = require('../models/http-errors');

const dummy_user = [
    {
        c_id : 'cus01',
        name : 'Emon',
        email : 'customer@gmail.com',
        phone : '01715566777',
        gender : 'male',
        birthday : '10-07-1993',
        city : 'Dhaka',
        area : 'Uttara',
        address : '38/3 road no-16 sector 4',
        orders: ['1','2']
    }
];

router.get('/:cid',(req,res,next) =>{
    const cus_id = req.params.cid;
    const cus_info = dummy_user.find(a =>{
        return a.c_id == cus_id;
    });
    if (!cus_info){
        throw new httpError('Could not find Customer.',404);
    }
    res.json({cus_info});
});

module.exports = router;
