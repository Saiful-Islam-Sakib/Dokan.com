const express = require('express');
const parser = require('body-parser');

const customerRoutes = require('./routes/customer-routes'); 
const orderRoutes = require('./routes/order-routes');
const productRoutes = require('./routes/products-routes');
const sellerRoutes = require('./routes/seller-routes');

const app = express();
/*
app.use(parser.urlencoded({extended : false}));

app.post('/user', (req,res,next) =>{
    res.send('<h1> ' + req.body.username + '</h1>');
})

app.use('/',(req , res , next) => {
    res.send('<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create user</button></form>');
});
*/
app.use('/dokan.com/customer',customerRoutes);

app.use('/dokan.com/customer',orderRoutes);

app.use('/dokan.com/products',productRoutes);

app.use('/dokan.com/seller',sellerRoutes);

app.use((error , req , res , next ) => {
    if (res.headerSent){
        return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occured'});
});

app.listen(5000);