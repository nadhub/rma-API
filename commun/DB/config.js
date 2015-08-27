/**
 * Created by nadir on 21/08/15.
 */

if(process.env.TARGET === 'dev') {
    module.exports = require('./config.dev');
}else{
    module.exports = require('./config.prod');

}