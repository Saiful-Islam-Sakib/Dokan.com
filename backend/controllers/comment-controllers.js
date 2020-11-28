const httpError = require('../models/http-errors');
const {validationResult} = require('express-validator');
const comment = require('../models/comment-model');
const customer = require('../models/customer-model');
const mongo = require('mongoose');

const getprodutComments = async (req,res,next) =>{
    const p_id = req.params.pid;
    let allcomment;
    try{
        allcomment = await comment.findById(p_id).populate('comments');
    }catch(err){
        const erro = new httpError('Somthing went wrong',422);
        return next(erro);
    }
    res.status(200).json({msg: allcomment.comments.map(comments => comments.toObject({getters:true}))});
};

const test = async (req,res,next) =>{
    const c_id = req.params.cid;
    const p_id = '5fba5b06a8d478291cad85ab';
    let checkproduct_ordered;
    let doe;
    /*try{
        checkproduct_ordered = await customer.findById(c_id).populate('orders');
        const fun = async(req,res,next) =>{
            console.log("Yes bro done");
            res.json({msg :'yes'});
        };
    }catch(err){
        const erro = new httpError('You can not rate this product',403);
        return next(erro);
    }*/
    doe = checkproduct_ordered.orders;
    //console.log(doe);
    const v1 = doe.map(order => order.toObject({getters:true}));
    const v2 = v1.map(({p_id}) => ({p_id}));
    const v3 = v2.map(({p_id}) => p_id);
    console.log(v3);

    const found = v3.find(item => p_id);
    if(!found){
        console.log(found);
    }
    res.status(200).json({msg: v1});
};


exports.getprodutComments = getprodutComments;
exports.test = test;
//exports.fun = fun;