/**
 * Created by nadir on 02/06/15.
 */

var express = require('express');
var passport = require('passport');

var userRouter = function(User){

    var controller = require('./user.controller')(User),
        router =  express.Router();


        router.route('/')
            .post(controller.post)
            .get(controller.get);

        /*router.route('/login')
            .post(function(req, res){
                passport('basic', {session: false}, function(){
                    res.json(user);
                });
            })
*/

    return router;

}

module.exports = userRouter;