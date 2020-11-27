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
    const {lol,p_id} = req.body;
    console.log('now its here');
    console.log(typeof lol);
    console.log(typeof p_id);
    //console.log(p_id);
    let all = p_id.length;
    for(i = 0 ; i < all ; i++){
        console.log(p_id[i]);
        console.log(typeof p_id[i]);
    }
    res.status(200).json({msg: all});
};


exports.getprodutComments = getprodutComments;
exports.test = test;