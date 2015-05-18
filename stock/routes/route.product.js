/**
 * Created by nad on 16/05/15.
 */

var express = require('express'),
    multer = require('multer');



var routeProduct = function(Product){

    var controller = require('../controllers/controller.product')(Product);
    var routes = express.Router();

    routes.use('/', multer({
        dest: '../upload/images',
        limits : {
            files: 2,
            fieldSize: 5
        }

    }));

    routes.route('/')
        .post(controller.post)
        .get(controller.get);

    routes.use('/:prodId', function(req, res, next){

        var id = req.params.prodId;
        Product.findById(id, function(err, product){

                if(err)
                    res.status(500).send(err);

                else if (product) {
                    req.product = product;
                    next();
                }else {
                    res.status(404).send('no product found');
                }
        })
     })


    routes.route('/:productId')
            .get(controller.getOne)
            .put(controller.update)
            .patch(controller.patch)
            .delete(controller.delete)

    return routes;

}


module.exports= routeProduct;



