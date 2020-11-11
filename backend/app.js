require('dotenv/config');
const express = require('express');
const { restart } = require('nodemon');
const mongoose = require('mongoose');
const bodyParser = require('bodyParser');

const app = express();
app.use(bodyParser.json());

//middleware(logics for a particular operation like authentication)
app.use('/post', () => {
    console.log('logics for post');
});

//routes
app.get('/get', (req, res) => {
    console.log('get');
});

app.post('/post', (req, res) => {
    console.log('post');
});

//connect to db
// storing this 'process.env.DB_CONNECTION_STRING' in a env file so that no one can see my database user name and password
mongoose.connect(process.env.DB_CONNECTION_STRING,{ useNewUrlParser: true , useUnifiedTopology: true },
 () => console.log('***** connected to db *****'));

//listener
app.listen(3000);
