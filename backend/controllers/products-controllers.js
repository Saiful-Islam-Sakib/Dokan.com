const httpError = require('../models/http-errors');
const {validationResult} = require('express-validator');
const product = require('../models/product-model');
const mongo = require('mongoose');
const seller = require('../models/seller-model');

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
        prod_info = await product.findById(prod_id);
    }catch(err){
        const erro = new httpError('Sorry, something went wrong',500);
        return next(erro);
    }
    if (!prod_info){
        throw new httpError('Could not find the provided Product.',404);
    }
    res.json({prod_info});
};

const addproduct = async(req,res,next) => {
    const err  = validationResult(req);
    if(!err.isEmpty()){
        console.log(err);
        return res.json({msg: 'Invalid information'});
    }
    const {p_id, name,brand,price,category,sub_category,tag,s_id } = req.body;
    const createdprod = new product({
        p_id, name,brand,price,category,sub_category,tag,s_id
    });
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
    //console.log(sellerexist);
    try{
        //await createdprod.save();
        const session = await mongo.startSession();
        //console.log('1');
        session.startTransaction();
        //console.log('2');
        await createdprod.save({session : session});
        //console.log('3');
        sellerexist.products.push(createdprod);
        //console.log('4');
        await sellerexist.save({seller: session});
        //console.log('5');
        await session.commitTransaction();
        //console.log('6');
    }catch(err){
        const erro = new httpError('Something gone wrong',500);
        return next(erro);
    }
    res.status(201).json({msg : 'New Product added'});
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
    try{
        await prod.remove();
    }catch(err){
        const erro = new httpError('Something went wrong',500);
        return next(erro);
    }
    res.status(200).json({msg : 'Product Deleted'});
};

const productSearch  = async (req,res,next) => {
    const pname = req.params.pname;
    /*
    const dum_prod = dummy_product.filter(p => p.name === pname);
    if(dum_prod.length === 0){
        return res.status(404).json({msg : 'Product not found'});
    }*/
    let prod;
    try{
        prod = await product.find({name : pname});
    }catch(err){
        const erro = new httpError('Something went wrong',500);
        return next(erro);
    }
    res.status(200).json({product : prod.map(prod => prod.toObject({getters :true}))});
};
const prodSearchbyCategory = async(req ,res ,next) =>{
    const p_cat = req.params.pcat;
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

exports.getproductbyid = getproductbyid;
exports.addproduct = addproduct;
exports.deleteproduct = deleteproduct;
exports.productSearch = productSearch;
exports.prodSearchbyCategory = prodSearchbyCategory;