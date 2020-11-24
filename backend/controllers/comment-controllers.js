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

exports.getprodutComments = getprodutComments;