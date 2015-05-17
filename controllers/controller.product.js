/**
 * Created by nad on 17/05/15.
 */

"use strict";


var productController = function(Product){

    var post = function(req, res){

        var product = new Product(req.body);
        product.save();
        res.status(201);
        res.send(product);
    }

    var get = function(req, res){

        Product.find(function(err, products){
            if(err)
                res.status(500).send(err);
            else
                res.json(products);
        })
    }

    return {

        post: post,
        get:  get
    }

}

module.exports = productController;
