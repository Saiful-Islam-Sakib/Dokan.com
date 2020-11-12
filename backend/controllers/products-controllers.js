const httpError = require('../models/http-errors');

let dummy_product = [
    {
        p_id : 'p1',
        name : 'ACI Pure Premium Maida 1 kg',
        brand: 'ACI',
        price : '48',
        category : 'consumer_food',
        sub_category: 'flour',
        tag : ['ata','moyda','flour'],
        s_id : 'sell1'
    }
];

const getproductbyid = (req,res,next) =>{
    const prod_id = req.params.pid;
    const prod_info = dummy_product.find(a =>{
        return a.p_id == prod_id;
    });
    if (!prod_info){
        throw new httpError('Could not find the provided Product.',404);
    }
    res.json({prod_info});
};

const createproduct = (req,res,next) => {
    const {p_id, name,brand,price,category,sub_category,tag,s_id } = req.body;
    const createdprod = {
        p_id, name,brand,price,category,sub_category,tag,s_id
    };
    dummy_product.push(createdprod);
    res.status(201).json({msg : 'New Product added'});
};

const deleteproduct = (req,res,nest) => {
    const del_prod = req.body.pid;
    dummy_product = dummy_product.filter(p => p.id !== del_prod);
    res.status(200).json({msg : 'Product Deleted'});
};

exports.getproductbyid = getproductbyid;
exports.createproduct = createproduct;
exports.deleteproduct = deleteproduct;