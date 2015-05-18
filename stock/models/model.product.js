/**
 * Created by nad on 17/05/15.
 */
"use strict";

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var productShcema = new Schema({

    productName: {type: String},
    productCode: {type: String},
    category: {type: String},
    imgUrl: {type: String},
    qty: {type: Number, default: 0},
    price : {type: Number, default: 0},
    pricePublic: {type: Number, default: 0},
    details : {
                marque: String,
                serialNumber: [String]
              }
})

module.exports = mongoose.model('Product', productShcema);
