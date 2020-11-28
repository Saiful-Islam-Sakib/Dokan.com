const httpError = require('../models/http-errors');
const {validationResult} = require('express-validator');
const comment = require('../models/comment-model');
const customer = require('../models/customer-model');
const rating_model = require('../models/rating-model');
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
    const {p_id,c_id,rating} = req.body;
    let modifyrating;
    try{
        //modifyrating = await rating_model.findById('5fc2b58900a0632f487466c0');
        modifyrating = await rating_model.find({p_id : p_id, c_id : c_id});
    }catch(err){
        console.log(err);
    }
    console.log(typeof modifyrating);
    let elem = modifyrating[0];
    if(elem){
        console.log('hi');
    }
    console.log(typeof elem);
    elem.rating = rating;
    try{
        await elem.save();
    }catch(err){
        console.log(err);
    }
    res.status(201).json({msg : 'done'});
};


exports.getprodutComments = getprodutComments;
exports.test = test;
//exports.fun = fun;