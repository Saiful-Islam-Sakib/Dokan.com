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
    
   let ptag = junaeid,sep = ' ';
   ptag = ptag.replace(/[^a-zA-Z0-9 ]/g, "");
   let ptag1 = ptag.split(sep);    ptag1.push(ptag);
    res.status(201).json(ptag1);
    
   
  const {p_id} = req.body;
  let size = p_id.length;
  //console.log(size);
  let seller = [];
  let sid,j=0,found;
  for(i = 0; i < size ; i++){
      let prodinfo;
      try{
          prodinfo = await product.findById(p_id[i]);
          sid = prodinfo.s_id;
          console.log('sid type' + typeof sid);
          console.log(sid);
          if(seller.length === 0){
              //console.log('here me');
              seller[j] = sid; j++; //console.log(j+' sid' + seller[j-1]);
              let x = seller[j-1];
              console.log('Type of'+typeof x);
          }else{
              found = seller.find(item => String(item) === String(sid));
              console.log('REsult =>'+found);
              if(!found){
                seller[j] = sid;    j++;
                console.log(seller);
              }   
          }
      }catch(err){
          const erro = new httpError('Something went wrong',501);
          return next(erro);
      }
  }
  let len = parseInt(seller.length);
  let deliCharge = len * 20;
  res.status(201).json({data : deliCharge});*/

  const {p_id} = req.body;
    let size = p_id.length;
    //console.log(size);
    let seller = [];
    let sid,j=0;
    for(i = 0; i < size ; i++){
        let prodinfo;
        try{
            prodinfo = await product.findById(p_id[i]);
            sid = prodinfo.s_id;
            //console.log(sid);
            if(seller.length === 0){
                console.log('here me');
                seller[j] = sid; j++; //console.log(j+' sid' + seller[j-1]);
            }else if(!(seller.find(item => String(item) === String(sid)))){
                seller[j] = sid;    j++;
            }
        }catch(err){
            const erro = new httpError('Something went wrong',501);
            return next(erro);
        }
    }
    let len = parseInt(seller.length);
    let deliCharge = len * 20;
    res.status(201).json({data : deliCharge});




};


exports.getprodutComments = getprodutComments;
exports.test = test;