const httpError = require('../models/http-errors');

const dummy_user = [
    {
        c_id : 'cus1',
        name : 'Emon',
        email : 'customer@gmail.com',
        phone : '01715566777',
        gender : 'male',
        birthday : '10-07-1993',
        city : 'Dhaka',
        area : 'Uttara',
        place : 'sector 4',
        address : '38/3 road no-16',
        orders: ['1','2']
    }
];

const getcusinfobyid = (req,res,next) =>{
    const cus_id = req.params.cid;
    const cus_info = dummy_user.find(a =>{
        return a.c_id == cus_id;
    });
    if (!cus_info){
        throw new httpError('Could not find Customer.',404);
    }
    res.json({cus_info});
};

const createcustomer = (req,res,next) => {
    const {c_id,name,email,phone,gender,birthday,city,area,place,address,orders} = req.body;
    const createdUser = {
        c_id,name,email,phone,gender,birthday,city,area,place,address,orders
    };
    dummy_user.push(createdUser);
    res.status(201).json({user : createdUser});
};


exports.getcusinfobyid = getcusinfobyid;
exports.createcustomer = createcustomer;