/**
 * Created by nad on 16/05/15.
 */

const express = require('express');
var app = express(),
    http = require('http'),
    socket = require('socket.io'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    passport= require('passport');



var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(function (req, res, next){

    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

require('./commun/auth/config')();
var Product = require('./stock/models/model.product');
var User = require('./commun/user/user.model');

require('./commun/DB/config')(mongoose, Product, User);


productRouter = require('./stock/routes/route.product')(Product);
userRouter = require('./commun/user/user.route')(User);

app.post('/login', passport.authenticate('local', {session: false}), function(req, res){
    res.json(req.user);
});

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

var server = http.createServer(app);
socket.listen(server);

server.listen(port, function(){
    console.log('Server running on  '+ port)

})

