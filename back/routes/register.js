var express = require('express');
var router = express.Router();
var user= global.dbhandler.getModelByType("user");
function Arandom (){
    return Math.random().toFixed(4)*10000;
}
//判断用户名是否已经存在
router.post("/isonly",function(req,res,next){
    user.find({nickname:req.body.username},function(error,data){
            if(!error){
                if(data.length>0){
                    res.send('0');
                }else{
                    res.send('1');
                }
            }
    })
})
//点击注册
router.post("/goReg",function(req,res,next){
    //console.log(req.body); //获取前端post的数据
    //将注册的数据存储到数据库mongodDB
    //插入文档到users 集合
        user.create({
        nickname:req.body.username,
        password:req.body.password
    },function(err,data){
        if(!err){
            console.log(data._id);
            console.log(data)
            res.send("1");
            //当注册成功，返回1
        }else{
            res.send("0");
        }
    })
});

module.exports = router;