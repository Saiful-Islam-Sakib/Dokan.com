const express = require('express');
const parser = require('body-parser');

const customerRoutes = require('./routes/customer-routes'); 

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
app.use(customerRoutes);

app.listen(5000);