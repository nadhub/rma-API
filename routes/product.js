/**
 * Created by nad on 16/05/15.
 */
var express = require('express');



var routeProduct = function(Product){

    var controller = require('../controllers/controller.product')(Product);
    var routes = express.Router();

    routes.route('/products')
        .post(controller.post)
        .get(controller.get)

    return routes;

}


module.exports= routeProduct;



