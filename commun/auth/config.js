/**
 * Created by nadir on 27/08/15.
 */

var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcrypt-nodejs'),
    jwt = require('jsonwebtoken'),
    key = 'la cle public .pem ici';

var User = require('../user/user.model');

module.exports = function(){

    passport.use(new LocalStrategy({usernameField: 'name'},

            function(name, password, done) {

                User.findOne({ name: name }, function(err, user) {
                    if (err) { return done(err); }

                    if(!user){return done(null, false, {message: 'Le login / password incorrect'})}

                    bcrypt.compare(password, user.password, function(err, same){

                        if(err){return done(err)}
                        if(!same){return done(null, false, {message: 'Le login / password incorrect'})}

                        var newUser = createJWT(user.userWithOutPW(user));
                        done(null, newUser)

                    });
                });
        }));

}

function createJWT(user){
    return jwt.sign(user, key, {expiresInMinutes: 60*5})
}