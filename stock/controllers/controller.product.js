/**
 * Created by nad on 17/05/15.
 */

"use strict";
var _ = require('lodash');


var productController = function(Product){

    var post = function(req, res){

        var product = new Product(req.body);

        product.save(function(err, product){
            if(!err){
                res.status(201);
                res.send(product);
            }

        });


    }

    var get = function(req, res){

        Product.find(function(err, products){
            if(err)
                res.status(500).send(err);

            else {
                var newProducts = [];
                products.forEach(function(prod, index, array) {
                    var element = prod.toJSON();
                    element.links = {};
                    element.links.self = 'http://' + req.headers.host + '/api/products/' + element._id;
                    newProducts.push(element);
                });
                res.json(newProducts);
            }
        })
    }

    var getOne = function(req, res){

        var retProduct = req.product.toJSON();
        res.json(retProduct);
    }

    var update = function(req, res){

        _.merge(req.product, req.body);

       req.product.save(function(err){
           if (err)
            res.status(500).send(err);
           else
               res.json(req.product);
       })

    }

    var patch = function(req, res){

        if(req.body._id)
           delete req.body._id;

        for (var prod in req.body){
            req.product[prod] = req.body[prod];
        }
        req.product.save(function(err){
            if(err) res.status(500).send(err)
            res.json(req.product);
        })
    }


    var delProduct = function(req, res){

        req.product.remove(function(err){
            if (err) res.status(500).send(err);
            res.status(204).send('Product removed');
        })
    }


    var upload = function(req, res){


    };


    return {

        post: post,
        get:  get,
        getOne: getOne,
        update: update,
        patch: patch,
        delete: delProduct,
        upload: upload
    }

}

module.exports = productController;
