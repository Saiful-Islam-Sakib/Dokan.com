const express = require('express');

const router = express.Router();

const httpError = require('../models/http-errors');

const dummy_product = [
    {
        p_id : 'p1',
        name : 'ACI Pure Premium Maida 1 kg',
        brand: 'ACI',
        price : '48',
        category : 'flour',
        tag : ['ata','moyda','flour']
    }
];

router.get('/:pid',(req,res,next) =>{
    const prod_id = req.params.pid;
    const prod_info = dummy_product.find(a =>{
        return a.p_id == prod_id;
    });
    if (!prod_info){
        throw new httpError('Could not find the provided Product.',404);
    }
    res.json({prod_info});
});

module.exports = router;
