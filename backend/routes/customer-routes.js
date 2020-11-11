const express = require('express');

const router = express.Router();

router.get('/customer',(req,res,next) =>{
    console.log('Customer route get request');
    res.json({msg : 'Customer is happy'});
});

module.exports = router;
