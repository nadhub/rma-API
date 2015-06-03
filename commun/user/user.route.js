/**
 * Created by nadir on 02/06/15.
 */

var express = require('express');

var userRouter = function(User){

    var controller = require('./user.controller')(User),
        router =  express.Router();


        router.route('/')
            .post(controller.post)
            .get(controller.get);


    return router;

}

module.exports = userRouter;