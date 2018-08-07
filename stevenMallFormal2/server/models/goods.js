var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    "productId": String,
    // 亦可"productId": {type: Sring}},
    "productName": String,
    "salePrice": Number,
    "productImage": String
});

module.exports = mongoose.model('Good', productSchema);  // 將其model命為Good輸出，並自動在mongoDB中找尋goods表
// 留意是找'goods'