var express = require('express');
var router = express.Router();
var shopcar= global.dbhandler.getModelByType("shopcar");

//只能匹配get请求
router.get("/add",function(req,res,next){
   console.log(req.session);
    //req.query 获取前端的get请求的数据
    //加入购物车
    shopcar.create({
        
    },function(error,data){
      if(!error){
        console.log(data);
        res.send(data);
      }
    })
});
router.get("/read",function(req,res,next){
    //req.query 获取前端的get请求的数据
    //读取购物车
    shopcar.find({
        userId:req.query.userid
    },function(error,data){
      if(!error){
        console.log(data);
        res.send(data);
      }
    })
});
router.get("/del",function(req,res,next){
    //req.query 获取前端的get请求的数据
    //删除某一物品
    shopcar.remove({
        goodsId:req.query.goodsid
    },function(error,data){
      if(!error){
        console.log(data);
        res.send(data);
      }
    })
});


module.exports = router;