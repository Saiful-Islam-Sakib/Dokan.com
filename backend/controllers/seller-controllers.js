const httpError = require('../models/http-errors');
const seller = require('../models/seller-model');
const {validationResult} = require('express-validator');

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

const getsellerproducts = async(req,res,next) =>{
    const seller_id = req.params.sid;
    /*
    const seller_info = dummy_seller.find(a =>{
        return a.s_id == seller_id;
    }); */
    let sellerinfo;
    try{
        sellerinfo = await seller.findById(seller_id).populate('products'); 
    }catch(err){
        const erro = new httpError('Something gone wrong',500);
        return next(erro);
    }
    if (!sellerinfo){
        throw new httpError('Could not find Seller.',404);
    }
    sellerinfo.password = null; sellerinfo.trade_lic_no = null; sellerinfo.birthday = null;
    sellerinfo.v_address = null; sellerinfo.nid = null; sellerinfo.b_acc = null;
    sellerinfo.b_acc_no = null; sellerinfo.bank = null; sellerinfo.branch = null;
    sellerinfo.sh_area_pc = null;
    //res.status(201).json({data : sellerinfo.orders.map(order => order.orderstoObject({getters : true}))});
    res.status(201).json({data : sellerinfo.toObject({getters:true})});
};

const sellerLogin = async(req,res,next) =>{
   const {email,phone,password} = req.body;
   /*
   const validSeller = dummy_seller.find(p => (p.email === email || p.phone === phone ));
    if(!validSeller || validSeller.password !== password){
        throw new httpError('Could not identify Seller',401);
    } */

    let existingSeller1;
    let existingSeller2;
    let sellerinfo;
    if(email){
        try{
            existingSeller1 = await seller.findOne({email : email});
        }catch(err){
            const erro = new httpError('Seller Login failed,please try again',500);
            return next(erro);
        }
        //console.log(existingUser1,'here');
        if(!existingSeller1 || existingSeller1.password !== password ){
            const erro = new httpError('Invalid credentials ,could not log in',401);
            return next(erro);
        }
        /*
        const sellerid = existingSeller1._id;
        try{
            sellerinfo = await seller.findById(sellerid).populate('products'); 
        }catch(err){
            const erro = new httpError('Customer Signup failed',500);
            return next(erro);
        }
        if (!sellerinfo){
            throw new httpError('Could not find Seller.',404);
        }
        */
        existingSeller1.password = null; existingSeller1.trade_lic_no = null; existingSeller1.birthday = null;
        existingSeller1.v_address = null; existingSeller1.nid = null; existingSeller1.b_acc = null;
        existingSeller1.b_acc_no = null; existingSeller1.bank = null; existingSeller1.branch = null;
        existingSeller1.sh_area_pc = null;
        res.status(201).json({data : existingSeller1.toObject({getters : true})});

        //res.status(201).json({msg : existingSeller1});    
    }
    if(phone){
        try{
            existingSeller2 = await seller.findOne({phone : phone});
        }catch(err){
            const erro = new httpError('Seller Login failed,please try again',500);
            return next(erro);
        }
        //console.log(existingUser2,'there');
        if(!existingSeller2 || existingSeller2.password !== password ){
            const erro = new httpError('Invalid credentials ,could not log in',401);
            return next(erro);
        }
        /*
        const sellerid = existingSeller2._id;
        try{
            sellerinfo = await seller.findById(sellerid).populate('products'); 
        }catch(err){
            const erro = new httpError('Customer Signup failed',500);
            return next(erro);
        }
        if (!sellerinfo){
            throw new httpError('Could not find Seller.',404);
        }*/
        existingSeller2.password = null; existingSeller2.trade_lic_no = null; existingSeller2.birthday = null;
        existingSeller2.v_address = null; existingSeller2.nid = null; existingSeller2.b_acc = null;
        existingSeller2.b_acc_no = null; existingSeller2.bank = null; existingSeller2.branch = null;
        existingSeller2.sh_area_pc = null; 
        res.status(201).json({data : existingSeller2.toObject({getters : true})});
        
        //res.status(201).json({msg : existingSeller2}); 
    }
};

const sellerSignup = async (req,res,next) =>{
    const err  = validationResult(req);
    if(!err.isEmpty()){
        console.log(err);
        const erro = new httpError('Seller Signup failed,please try again',422);
        return next(erro);
    }
    const {v_f_name,v_l_name,email,phone,trade_lic_no,birthday,v_city,v_area,v_address,nid,password,b_acc,b_acc_no,
        bank,branch,sh_name,sh_city,sh_area,sh_place,sh_area_pc} = req.body;
    
        let existingSeller1;
        let existingSeller2;
        try{
            existingSeller1 = await seller.findOne({email : email});
            existingSeller2 = await seller.findOne({phone : phone});
        }catch(err){
            const erro = new httpError('Seller Signup failed,please try again',500);
            return next(erro);
        }
        if(existingSeller1 || existingSeller2 ){
            const erro = new httpError('Seller already exist',421);
            return next(erro);
        }
    

    const newSeller = new seller ({v_f_name,v_l_name,email,phone,trade_lic_no,birthday,v_city,v_area,v_address,nid,password,b_acc,b_acc_no,
        bank,branch,sh_name,sh_city,sh_area,sh_place,sh_area_pc,products:[]});
    //dummy_seller.push(newSeller);
    //console.log(newSeller);
    try{
        await newSeller.save();
    }catch(err){
        const erro = new httpError('Seller Signup failed',500);
        return next(erro);
    }
    res.status(201).json({msg : newSeller.toObject({getters : true})});
};

const updateSeller = async (req,res,next) => {
    const err = validationResult(req);
    if(!err.isEmpty()){
        console.log(err);
        throw new httpError('Invalid information',422);
    }
    const {s_id,v_f_name,v_l_name,email,phone,v_city,v_area,v_address,b_acc,b_acc_no,
        bank,branch,sh_city,sh_area,sh_place,sh_area_pc,password,sh_name} = req.body;
    const sid = s_id;

    let updateSellerInfo;
    try{
        updateSellerInfo = await seller.findById(sid);
    }catch(err){
        const erro = new httpError('Something went wrong',500);
        return next(erro);
    }
    if(updateSellerInfo.password === password){
        updateSellerInfo.phone = phone;
        updateSellerInfo.v_city = v_city;   updateSellerInfo.v_area = v_area;   updateSellerInfo.b_acc = b_acc;
        updateSellerInfo.v_f_name = v_f_name;   updateSellerInfo.b_acc_no = b_acc_no;   updateSellerInfo.bank = bank;
        updateSellerInfo.v_l_name = v_l_name;   updateSellerInfo.branch = branch;   updateSellerInfo.sh_city = sh_city;
        updateSellerInfo.email = email;     updateSellerInfo.sh_area = sh_area; updateSellerInfo.sh_place = sh_place;      
        updateSellerInfo.v_address = v_address; updateSellerInfo.sh_area_pc = sh_area_pc; updateSellerInfo.sh_name = sh_name;
        try{
            await updateSellerInfo.save();
        }catch(err){
            const erro = new httpError('Sorry could not update customer info',500);
            return next(erro);
        }
        res.status(201).json({data: updateSellerInfo.toObject({getters: true})});
    }else{
        res.status(500).json({data : 'Your password did not match'});
    }   
}


exports.getsellerproducts = getsellerproducts;
exports.sellerLogin = sellerLogin;
exports.sellerSignup = sellerSignup;
exports.updateSeller = updateSeller;