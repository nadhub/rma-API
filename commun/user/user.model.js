/**
 * Created by nadir on 02/06/15.
 */
"use strict";

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt-nodejs');


var userSchema = Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    roles: [String]

})

userSchema.pre('save', function(next){
    var user = this;
    if(!user.isModified('password')) next();

    bcrypt.genSalt(10, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt, null,function(err, hash){
            if(err) return next(err);
            user.password = hash;
            next();
        })
    })

})


module.exports = mongoose.model('User', userSchema);