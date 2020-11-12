const httpError = require('../models/http-errors');

const dummy_customer = [
    {
        c_id : 'cus1',
        f_name : 'Emon',
	    l_name: 'Haque',
        email : 'customer@gmail.com',
        phone : '01715566777',
        gender : 'male',
        birthday : '10-07-1993',
        city : 'Dhaka',
        area : 'Uttara',
        place : 'sector 4',
        address : '38/3 road no-16',
        delivery_add : '38/3 road no-16',
        orders: ['1','2']
    }
];

const getcusinfobyid = (req,res,next) =>{
    const cus_id = req.params.cid;
    const cus_info = dummy_customer.find(a =>{
        return a.c_id == cus_id;
    });
    if (!cus_info){
        throw new httpError('Could not find Customer.',404);
    }
    res.json({cus_info});
};

const createcustomer = (req,res,next) => {
    const {c_id,f_name,l_name,email,phone,gender,birthday,city,area,place,address,delivery_add,orders} = req.body;
    const createdUser = {
        c_id,f_name,l_name,email,phone,gender,birthday,city,area,place,address,delivery_add,orders
    };
    dummy_user.push(createdUser);
    res.status(201).json({user : createdUser});
};

const updatecustomer = (req,res,next) =>{
  const {c_id,phone,city,area,place,address,delivery_add} = req.body;
  const cus_id = req.body.cid;
  
  const updateCusInfo = dummy_customer.find(p => p.id === cus_id);
  const customerIndex = dummy_customer.findIndex(p => p.id === cus_id);
  updateCusInfo.phone = phone;
  updateCusInfo.city = city;
  updateCusInfo.area = area;
  updateCusInfo.place = place;
  updateCusInfo.address = address;
  updateCusInfo.delivery_add = delivery_add;

  dummy_customer[customerIndex] = updateCusInfo;
  res.status(200).json({customer: updateCusInfo});
};

const deletecustomer = (req,res,next) =>{

};


exports.getcusinfobyid = getcusinfobyid;
exports.createcustomer = createcustomer;
exports.updatecustomer = updatecustomer;
exports.deletecustomer = deletecustomer;