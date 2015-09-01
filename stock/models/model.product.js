/**
 * Created by nad on 17/05/15.
 */
"use strict";

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var details = {
    marque: String,
    serial_number: String
};


var productShcema = new Schema({

    productName: {type: String},
    productCode: {type: String},
    category: {type: String},
    imgUrl: {type: String},
    stock: {type: Number, default: 0},
    price : {type: Number, default: 0},
    pricePublic: {type: Number, default: 0},
    details : []
})

productShcema.pre('save', function(next){

  var product = this;
    if(product.details.length && (product.stock !== product.details.length)){
        product.stock = product.details.length;
        next();
    }else {
        next();
    }
})

module.exports = mongoose.model('Product', productShcema);
