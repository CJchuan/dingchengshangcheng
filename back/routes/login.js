var express = require('express');
var router = express.Router();
var user= global.dbhandler.getModelByType("user");


//下面只能匹配post请求
router.post("/",function(req,res,next){
    //console.log(req.body); //获取前端post的数据

    //将注册的数据存储到数据库mongodDB

    //查询集合users 有没有这个email & password 对应的数据
    user.find({
        nickname:req.body.username,
        password:req.body.password
    },function(error,data){
        if(!error){
            //data 就是匹配到所有数据
        
           if(data.length==0){
               //用户名密码输入错误
               res.send("0");
           }else{
               //设置sessionID 为有效id
               // req.session.uname= data[0].nickname;
               var options={
                   uid:data[0]._id,
                   nickname:data[0].nickname
               }
               req.session.userinfo= options;
               //用户名密码输入正确
               res.send("1");
           }
        }
    })
});

module.exports = router;