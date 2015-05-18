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

        req.product.productName = req.body.name;
        req.product.productCode = req.body.productCode;
        req.product.category = req.body.category;
        req.product.imgUrl = req.body.imgUrl;
        req.product.qty = req.body.qty;
        req.product.price = req.body.price;
        req.product.pricePublic = req.body.pricePublic;
        req.product.details = req.body.details;

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


    return {

        post: post,
        get:  get,
        getOne: getOne,
        update: update,
        patch: patch,
        delete: delProduct
    }

}

module.exports = productController;
