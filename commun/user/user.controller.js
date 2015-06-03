/**
 * Created by nadir on 02/06/15.
 */
"use strict";

var userController = function(User){

    var post = function(req, res){

        var user = new User(req.body);
        user.save();
        res.status(201);
        res.send(user);
    }

    var get = function(req, res){

        User.find(function(err, users){
            if (err) res.status(500).send(err)
            res.status(200).json(users);
        })
    }


    return {
        post: post,
        get: get

    }

}

module.exports = userController;