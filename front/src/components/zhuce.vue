<template>
        <div class="zhuce">
            <header class="aui-bar aui-bar-nav aui-bar-danger">
                <a class="aui-pull-left" onclick="history.go(-1)">
                    <span class="aui-icon icon-left"><i class="iconfont">&#xe647;</i></span>
                </a>
                <div class="aui-title"><a href="index.html"> 鼎城商城注册</a></div>
            </header>
            <div style="padding:20px;">
                <div class="form">
                    <input v-model="username" id="name" type="text" class="username" name="name" value="" placeholder="请输用户名5-12位英文字母或数字">
                    <input v-model="password" id="password" type="password" class="password" name="password" value="" placeholder="请输入密码">
                    <!-- <div class="popb" >*密码与要求不符</div>
                    <div class="succ" >*设置成功</div>
 -->

                    <button class="aui-btn aui-btn-primary aui-btn-block"  id="submit" @click="reg">免费注册</button>

                    <div style="line-height: 50px;">
                        <a class="aui-pull-left"  url="loginForget.html"  @click="changepage">已有账号?</a>
                        <a class="aui-pull-right"> <input type="checkbox" name="moren" checked class="xieyi"> 用户协议</input> </a>
                    </div>                    
                </div>   
            </div>
        </div>
 </template>

   
    <script>

    import router from "../router";

    export default {
      name: 'zhuce',
      data () {
        return {
           // categorylist:[],
           // goodslist:[],
           // currentIndex:0,
           // isShow:true
           postslist:[],
           password:'',
           username:''


        }
      },
        methods:{
            changepage(){
        // router.push(`/goods/detail/${id}`); //es6 字符串模板
             router.push({name:"loading"})

         },
            reg:function(){
                 var re= /^[a-zA-Z][a-zA-Z0-9]{5,12}$/;
                  console.log( re.test(this.username) );
                if(!re.test(this.username)){
                    alert("用户名填写错误！");
                }
                else{
                    var _this=this;

                    fetch("http://10.2.158.246:3000/register/goReg",{
                        method:'post',
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: `username=${_this.username}&password=${_this.password}`
                        }).then(function (response) {
                        return response.json();//json对象
                        }).then(function(result){
                        console.log(result);
                        if(result==1){
                            router.push({name:"loading"});
                        }else{
                          alert('注册失败！')
                        }
                    })
                 }
              
            }
        }
}
   


    </script>



 <style>


    
    *{
        margin:0; 
        padding:0;
    }
    body {
        background-color: #f2f2f2;
        color: #555;
        max-width: 60rem;
        margin: 0 auto;
    }
    ul, li {
        list-style: none;
    }
    p {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 1.4rem;
        color: #8f8f94;
    }
    a {
        color: #0062cc;
        text-decoration: none;
        background-color: transparent;
    }
    #clickagent {
        height: 100%;
        font-size: 1.8rem;
    }
    
    .aui-bar {
       
        /*position: fixed;*/
        height: 4.8rem;
        line-height: 4.8rem;
        z-index: 998;
    
    
        width: 100%;
        background: #fff;
        color: #bc946e;
        border-bottom: 0.1rem solid #fafafa;
    }
    
    /*.bar-body {
        padding-top: 48px;
    }*/
    .aui-bar .aui-pull-left {
            padding-left: 1rem; 
            font-size: 1.6rem; 
            font-weight: 400; 
        }
    .aui-bar a {
        color: #bc946e;
    }
    .aui-bar a {
        color: #ffffff;
    }
    .aui-pull-left {
        float: left !important;
    }
    .aui-bar .aui-title {
        right: 8rem;
        left: 8rem;
        width: auto;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .aui-title {
        position: absolute;
        width: 100%;
        margin: 0 -1rem;
        text-align: center;
        white-space: nowrap;
        font-size: 1.8rem;
    }
    .aui-bar a {
        color: #bc946e;
    }
    .form {
        margin-top: 1.5rem;
        width: 100%;
        font-size:1.6rem;
    }
    .form .username {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        margin-bottom: 0rem;
    }
    .form .password {
        margin-top: -0.1rem;
        border-bottom-right-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        margin-bottom: 0rem;
    }
    .form .username, .form .password {
        background-color: #fff;
        width: 100%;
        height: 5rem;
        border: 0.1rem solid #ccc;
        padding: 0 1rem;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .form .aui-btn {
        margin-top: 1.2rem;
    }
    .aui-btn-block {
        padding: 0.8rem 0;
    }
    .aui-btn-block {
        display: block;
        width: 100%;
        padding: 1.5rem 0;
        margin-bottom: 0;
        font-size: 1.8rem;
    }
    button, .aui-btn {
        position: relative;
        display: inline-block;
        padding: 0.6rem 1.2rem;
        margin-bottom: 0;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        background-color: #ecf0f1;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 0.1rem solid #ecf0f1;
        border-radius: 0.4rem;
    }
    .aui-btn-primary {
        color: #ffffff;
        background-color: #1abc9c;
        border: 0.1rem solid #1abc9c;
        font-size: 1.8rem;
    }

    button, input, optgroup, select, textarea {
        margin: 0;
        font: inherit;
        color: inherit;
    }
    .aui-pull-left {
        float: left !important;
    }
    .aui-pull-right {
        float: right !important;
        color:red;
    }

    .popb{
        display: none;
        color:red;
        font-size: 1.4rem; }
    .succ{
        color:green;
        font-size: 1.4rem; 
        display: none;}

   



    </style>
