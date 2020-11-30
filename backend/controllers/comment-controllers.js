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
    const junaeid = "Pran Borhani/ Masala* 150g";
    /*
    
    let sep2 = '/';
    console.log(junaeid.split(sep2));
    sep2 = '*';
    console.log(junaeid.split(sep2));
    const sep = ['/','*',' '];
    let s = sep.length;
    let news;
    sep.forEach((i) => {
        console.log(i);
        news=junaeid.split(i);
    });
    
    const sep = ['/','*',' '];
    let tag = junaeid, modify; 
    let s = junaeid.length;
    for(i = 0 ; i < s ; i++ ){
        if(i > 0){
            console.log(typeof modify);
            //modify = modify.split(sep[i]);
        }else{
            modify = junaeid.split(sep[i]);
            console.log(typeof modify);
        }
    }
    //let news = junaeid.split(sep);
    */
   let ptag = junaeid,sep = ' ';
   ptag = ptag.replace(/[^a-zA-Z0-9 ]/g, "");
   let ptag1 = ptag.split(sep);    ptag1.push(ptag);
    res.status(201).json(ptag1);
};


exports.getprodutComments = getprodutComments;
exports.test = test;