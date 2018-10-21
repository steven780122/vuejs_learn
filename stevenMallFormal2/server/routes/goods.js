var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

// 連接mongoDB數據庫:
mongoose.connect('mongodb://127.0.0.1:27017/dumall');
// 監聽是否連接成功
mongoose.connection.on("connected", function(){
    console.log("Mongo DB connected succcess!");
});
mongoose.connection.on("error", function(){
    console.log("Mongo DB connected fail!");
});
mongoose.connection.on("disconnected", function(){
    console.log("Mongo DB connected disconnected!");
});

// 開始拿模型!!
router.get("/", function(req, res, next){
    // res.send("hello, goods list")
    Goods.find({}, function(err, doc){   //doc 舊式查出來的文檔!!!
        if(err){
            res.json({
                status: '1',
                msg: err.message
            });
        }else{
            res.json({
                status: '0',
                msg:'',
                result: {
                    count: doc.length,
                    list: doc
                }
            });
        }
    })
});
// 小心!!  要export  不然app.use納編會是空的!!!
module.exports = router;
