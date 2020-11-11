const httpError = require('../models/http-errors');

const dummy_seller = [
    {
        s_id : 'sell1',
        v_name : 'Shohag',
        email : 'shohag099@gmail.com',
        phone : '01856879074',
        trade_lic_no : '0530014',
        birthday : '18-02-1985',
        v_city : 'Dhaka',
        v_area : 'Motijheel',
        v_address : '153 Motijheel C/A, Dhaka-1000',
        nid : '6004589963',
        b_acc: 'Shohag Ahmed', 
        b_acc_no: '18798432578938',
        bank : 'dutch bangla',
        branch : 'Motijheel',
        sh_city : 'Dhaka',
        sh_area : 'Uttara',
        sh_place : 'sector 4',
        sh_area_pc : '1230' 
    }
];

const getsellerinfobyid = (req,res,next) =>{
    const seller_id = req.params.sid;
    const seller_info = dummy_seller.find(a =>{
        return a.s_id == seller_id;
    });
    if (!seller_info){
        throw new httpError('Could not find Seller.',404);
    }
    res.json({seller_info});
};


exports.getsellerinfobyid = getsellerinfobyid;