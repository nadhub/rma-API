/**
 * Created by nad on 16/05/15.
 */

const express = require('express');
var app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next){

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

var db = mongoose.connect('mongodb://localhost/RMA');
var Product = require('./stock/models/model.product');
var User = require('./commun/user/user.model');


productRouter = require('./stock/routes/route.product')(Product);
userRouter = require('./commun/user/user.route')(User);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);


app.listen(port, function(){
    console.log('Server running on  '+ port)

})
