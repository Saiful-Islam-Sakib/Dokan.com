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
        password : '123456',
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

const sellerLogin = (req,res,next) =>{
   const {email,phone,password} = req.body;
   const validSeller = dummy_seller.find(p => (p.email === email || p.phone === phone ));
    if(!validSeller || validSeller.password !== password){
        throw new httpError('Could not identify Seller',401);
    }
    res.status(201).json({msg : 'Logged In'}); 
};

const sellerSignup = (req,res,next) =>{
    const {s_id,v_name,email,phone,trade_lic_no,birthday,v_city,v_area,v_address,nid,password,b_acc,b_acc_no,
        bank,branch,sh_city,sh_area,sh_place,sh_area_pc} = req.body;
    const newSeller = {s_id,v_name,email,phone,trade_lic_no,birthday,v_city,v_area,v_address,nid,password,b_acc,b_acc_no,
        bank,branch,sh_city,sh_area,sh_place,sh_area_pc};
    dummy_seller.push(newSeller);
    res.status(201).json({msg : 'New Seller Added'});
};


exports.getsellerinfobyid = getsellerinfobyid;
exports.sellerLogin = sellerLogin;
exports.sellerSignup = sellerSignup;