/**
 * Created by nadir on 27/08/15.
 */

var User = require('../user/user.model');

module.exports = function(){

    var findUser = function(name, next){
        User.findOne({name: name.toLocaleLowerCase()}, function(err, user){
            next(err, user);
        })
    }

    return {
        findUser: findUser
    }

}