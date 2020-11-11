const express = require('express');

const router = express.Router();

const dummy_user = [
    {
        id : 'cus01',
        name : 'Emon',
        email : 'customer@gmail.com',
        phone : '01715566777',
        gender : 'male',
        birthday : '10-07-1993',
        city : 'Dhaka',
        area : 'Uttara',
        address : '38/3 road no-16 sector 4'
    }
];

router.get('/:cid',(req,res,next) =>{
    //console.log('Customer route get request');
    const cus_id = req.params.cid;
    const cus_info = dummy_user.find(a =>{
        return a.id == cus_id;
    });
    res.json({cus_info});
});

module.exports = router;
