const httpError = require('../models/http-errors');
const {validationResult} = require('express-validator');
const comment = require('../models/comment-model');
const customer = require('../models/customer-model');
const product = require('../models/product-model');
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
    const {p_id} = req.body;
    let size = p_id.length;
    console.log(size);
    let seller = [];
    let sid,j=0;
    for(i = 0; i < size ; i++){
        let prodinfo;
        try{
            prodinfo = await product.findById(p_id[i]);
            sid = prodinfo.s_id;
            console.log(sid);
            if(seller.length === 0){
                console.log('here me');
                seller[j] = sid; j++; console.log(j+' sid' + seller[j-1]);
            }else if(!(seller.find(item => item === sid))){
                seller[j] = sid;
            }
        }catch(err){
            console.log('i am here bro');
        }
    }
    console.log(seller);    
    res.status(201).json({msg : seller});
};


exports.getprodutComments = getprodutComments;
exports.test = test;