var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
     console.log(req.session.uname);//打印session的值
    if (req.session.userinfo) {//检查用户是否已经登录
        // console.log(req.session);//打印session的值
        res.send(req.session.userinfo.nickame);
    } else {//否则展示index页面
        res.send('null');
    }
});
module.exports = router;