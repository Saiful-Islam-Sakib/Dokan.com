const mongo = require('mongoose');
const product = require('./models/customer-model');

mongo.connect('mongodb+srv://Junaeid:admin101@cluster0.fronr.mongodb.net/Dokan?retryWrites=true&w=majority'
).then(() => {
    console.log('Connected to database!');
}).catch(() => {
    console.log('Connection Failed!')
});

const createCustomer = async(req,res,next) => {
    const createdCustomer = new product({
        c_id : req.body.c_id,
        f_name : req.body.f_name,
        l_name : req.body.l_name,
        email : req.body.email,
        phone : req.body.phone,
        gender : req.body.gender,
        birthday : req.body.birthday,
        city : req.body.city,
        area : req.body.area,
        place : req.body.place,
        address : req.body.address,
        delivery_add : req.body.delivery_add
    });
    const data = await createdCustomer.save();
    res.json(data);
};

exports.createCustomer = createCustomer;