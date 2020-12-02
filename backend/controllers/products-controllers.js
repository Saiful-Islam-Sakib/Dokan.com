const httpError = require('../models/http-errors');
const {validationResult} = require('express-validator');
const product = require('../models/product-model');
const mongo = require('mongoose');
const seller = require('../models/seller-model');
const e = require('express');

let dummy_product = [
    {
        p_id : 'p1',
        name : 'ACI Pure Premium Maida 1 kg',
        brand: 'ACI',
        price : '48',
        category : 'consumer_food',
        sub_category: 'flour',
        tag : ['ata','moyda','flour','ACI','Maida'],
        s_id : 'sell1',
        sh_name: 'Shohag store'
    },
    {
        p_id : 'p2',
        name : 'Miniket Rice 5 kg',
        brand: 'Bashundhara',
        price : '300',
        category : 'consumer_food',
        sub_category: 'rice',
        tag : ['cal','chal','rice','Miniket','Bashundhara'],
        s_id : 'sell1',
        sh_name: 'Shohag store'
    },
    {
        p_id : 'p3',
        name : 'Air Freshner',
        brand: 'ACI',
        price : '570',
        category : 'Toiletries',
        sub_category: 'Air freshner',
        tag : ['freser','freshner','air freshner','ACI'],
        s_id : 'sell2',
        sh_name: 'Dani store'
    }
];

const getproductbyid = async (req,res,next) =>{
    const prod_id = req.params.pid;
    let prod_info;
    try{
        prod_info = await product.findById(prod_id).populate('comments');
    }catch(err){
        const erro = new httpError('Sorry, something went wrong',500);
        return next(erro);
    }
    if (!prod_info){
        throw new httpError('Could not find the provided Product.',404);
    }
    res.json({data : prod_info.toObject({getters : true})});
};

const addproduct = async(req,res,next) => {
    const err  = validationResult(req);
    if(!err.isEmpty()){
        console.log(err);
        return res.json({msg: 'Invalid information'});
    }
    const {name,brand,price,category,sub_category,s_id,img } = req.body;
    let ptag = name,sep = ' ';
    ptag = ptag.replace(/[^a-zA-Z0-9& ]/g, "");
    let ptag1 = ptag.split(sep);
    ptag1.push(ptag);
    //dummy_product.push(createdprod);
    //console.log(createdprod);
    let sellerexist;
    try{
        sellerexist = await seller.findById(s_id);
    }catch(err){
        const erro = new httpError('Something went wrong',500);
        return next(erro);
    }
    if(!sellerexist){
        const erro = new httpError('Seller not exist',401);
        return next(erro);
    }
    let shop = sellerexist.sh_name;
    console.log(shop);
    const createdprod = new product({
        name,brand,price,category,sub_category,tag : ptag1,s_id,shop_name : shop,img:img
    });
    console.log(createdprod);
    try{
        const session = await mongo.startSession();
        console.log('1');
        session.startTransaction();
        console.log('2');
        await createdprod.save({session : session});
        console.log('3');
        sellerexist.products.push(createdprod);
        console.log('4');
        await sellerexist.save({seller: session});
        console.log('5');
        await session.commitTransaction();
        console.log('6');
    }catch(err){
        const erro = new httpError('Something gone wrong 1',500);
        return next(erro);
    }
    res.status(201).json({data : 'New Product added'});
};

const deleteproduct = async(req,res,next) => {
    const del_prod = req.params.pid;
    /*
    if(!dummy_product.filter(p => p.id !== del_prod)){
        throw new httpError('Could not find product',404);
    }
    dummy_product = dummy_product.filter(p => p.id !== del_prod); */
    let prod;
    try{
        prod = await product.findById(del_prod);
    }catch(err){
        const erro = new httpError('Requested product is not avaiable',500);
        return next(erro);
    }
    let sid = prod.s_id;
    let sellerinfo;
    try{
        sellerinfo = await seller.findById(sid);
    }catch(err){
        const erro = new httpError('Requested product is not avaiable',500);
        return next(erro);
    }
    try{
        //await prod.remove();
        const session = await mongo.startSession();
        session.startTransaction();
        await prod.remove({session : session});
        sellerinfo.products.pull(prod);
        await sellerinfo.save({session : session});
        await session.commitTransaction();
    }catch(err){
        const erro = new httpError('Something went wrong',500);
        return next(erro);
    }
    res.status(200).json({msg : 'Product Deleted'});
};

const productbySubcat  = async (req,res,next) => {
    const subcat = req.params.psubcat;
    /*
    const dum_prod = dummy_product.filter(p => p.name === pname);
    if(dum_prod.length === 0){
        return res.status(404).json({msg : 'Product not found'});
    }*/
    let prod;
    try{
        prod = await product.find({sub_category : subcat});
    }catch(err){
        const erro = new httpError('Something went wrong',500);
        console.log(subcat);
        return next(erro);
    }
    res.status(200).json({product : prod.map(prod => prod.toObject({getters :true}))});
};

const productbylocation = async(req,res,next) =>{
    const {city,area,place} = req.body;
    //console.log(city+' '+area+' '+place);
    let locseller;
    try{
        locseller = await seller.find({sh_city : city , sh_area : area,sh_place : place});
    }catch(err){
        const erro = new httpError('Something went wrong',500);
        console.log(subcat);
        return next(erro);
    }
    const locsellerv2 = locseller.map(prod => prod.toObject({getters :true}));
    const seller_id = locsellerv2.map(({id}) => ({id}));
    let seller_id_arr  = seller_id.map(({id}) => id);
    const i = seller_id_arr.length;
    let prod;
    let add = false;
    let prodbyloc;
    for(j = 0 ; j < i; j++){
        try{
            prod = await product.find({s_id : seller_id_arr[j]});
            if(add === true && prod.length > 0){
                prodbyloc = prodbyloc.concat(prod);
            }
            else if(prod.length > 0){
                prodbyloc = prod;
                add = true;
            }else{
                add = false;
            }
        }catch(err){
            console.log("Something gone wrong");
            const erro = new httpError('Something went wrong',500);
            return next(erro);
        }
    }
    //console.log(prodbyloc);
    if(prodbyloc){
        console.log("here bro");
        return res.status(200).json({product : prodbyloc.map(prod => prod.toObject({getters :true}))});
    }else{
        console.log("there bro");
        return res.status(200).json({product : []});  
    }
    //res.status(200).json({product : prodbyloc.map(prod => prod.toObject({getters :true}))});
    //res.status(200).json({product : prodbyloc});
    
};

const prodSearchbyCategory = async(req ,res ,next) =>{
    const ploc = req.params.ploc;
    /*
    const dum_product = dummy_product.filter(p => p.category === p_cat);
    if(dum_product.length === 0){
        return res.status(404).json({msg : 'Product not found'});
    }*/
    let prod;
    try{
        prod = await product.find({category : p_cat});
    }catch(err){
        const erro = new httpError('Something went wrong',500);
        return next(erro);
    }
    res.status(200).json({product : prod.map(prod => prod.toObject({getters :true}))});
    //res.status(200).json(dum_product);
};

/*
    const del = async(req,res,next) =>{
        const id = req.params.id;
        const sel = "5fb6ac4bd2011f14bc0d702f";
        let user;
        try{
            user = await seller.findById(sel);
        }catch(err){
            console.log('err')
        }
        try{
            await user.products.pull(id);
            await user.save();
        }catch(err){
            console.log('err')
        }
        console.log(user);
    }
*/
exports.getproductbyid = getproductbyid;
exports.addproduct = addproduct;
exports.deleteproduct = deleteproduct;
exports.productbySubcat = productbySubcat;
exports.prodSearchbyCategory = prodSearchbyCategory;
exports.productbylocation = productbylocation;

//exports.del = del;