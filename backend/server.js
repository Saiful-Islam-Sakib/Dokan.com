const express = require('express');
const parser = require('body-parser');
const mongo = require('mongoose');

const customerRoutes = require('./routes/customer-routes'); 
const orderRoutes = require('./routes/order-routes');
const productRoutes = require('./routes/products-routes');
const sellerRoutes = require('./routes/seller-routes');

const httpError = require('./models/http-errors');

const app = express();

app.use(parser.json());

app.use('/dokan.com/customer',customerRoutes);

app.use('/dokan.com/order/customer',orderRoutes);

app.use('/dokan.com/order/seller',orderRoutes);

app.use('/dokan.com/products',productRoutes);

app.use('/dokan.com/seller',sellerRoutes);

//app.post('/dokan.com/newCustomer', customerData.createCustomer);

//app.get('/dokan.com/allcustomer', customerData.getcustomer);

app.use((req,res,next) =>{
    const error = new httpError('Could not find this directory',404);
    throw error;
});

app.use((error , req , res , next ) => {
    if (res.headerSent){
        return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occured'});
});


mongo.connect('mongodb+srv://Junaeid:admin101@cluster0.fronr.mongodb.net/Dokan?retryWrites=true&w=majority'
).then(() => {
    app.listen(5000);
}).catch((err) => {
    console.log(err);
});
