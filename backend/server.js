const express = require('express');
const parser = require('body-parser');

const customerRoutes = require('./routes/customer-routes'); 
const orderRoutes = require('./routes/order-routes');

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

app.listen(5000);