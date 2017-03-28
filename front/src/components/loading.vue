	<template>
		
<!--     <body style="overflow:auto" class="bar-body">
 -->    <div id="clickagent">
    		<header class="aui-bar aui-bar-nav aui-bar-danger">
		        <a class="aui-pull-left" onclick="history.go(-1)">
		            <span class="aui-icon"><i class="iconfont">&#xe647;</i></span> <!-- icon-left -->
		        </a>
		        <div class="aui-title"><a href="index.html"> 鼎城商城</a></div>
		    </header>
		    <div style="padding:20px;">
		    	<div class="form">
		    		<input id="name" type="text" class="username" name="name" value="" placeholder="请输用户名" v-model="username">
		    		<input id="password" type="password" class="password" name="password" value="" placeholder="请输入密码" v-model="password">
		    		<button class="aui-btn aui-btn-primary aui-btn-block" id="submit" @click="load">登 录</button>
		    		<div style="line-height: 50px;">
	                    <a class="aui-pull-left" >忘记密码?</a>
	                    <a class="aui-pull-right" style="color:#F26200"  @click="changepage">免费注册</a>
	                </div>
		    	</div>
		    	
		    </div>

    	</div>

	</template>
   

    
	<script>

	import router from "../router";

	export default {
	  name: 'loding',
	  data () {
	    return {
	       // categorylist:[],
	       // goodslist:[],
	       // currentIndex:0,
	       // isShow:true
	       postslist:[],
	       username:"",
	       password:""
	    }
	  },

	  methods:{
	  	changepage(){
  			router.push({name:"zhuce"})
  		},
  		load(){
  			var _this=this;
            this.$http.post("http://10.2.158.246:3000/login",{username:_this.username,password:_this.password}).then(res=>{
             console.log(res.body)
             if(res.body==0){

                    alert('用户名或密码错误！')
             }else{
                router.push({name:"home"})
             }

            })
        }

	  }
 
	}


    </script>

	<style scoped>

  
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
	}



	</style>


	

	