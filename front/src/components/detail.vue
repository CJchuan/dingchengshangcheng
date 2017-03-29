<template>
  <div id="detail">
  	  <router-view></router-view>        
	    <header>
	    	<a @click="changeBack"><span><</span></a>
	    	<p>商品详情</p>
	    </header>  
  	  
  	  
			   	  <swipe class="my-swipe" :showIndicators="true">
						  <swipe-item class="slide1" v-for="data in goods.images"><img :src="data"/></swipe-item>
						</swipe>
			  	  
			  	  <div class="sell">
			  	      <h3>{{goods.title}}</h3>
			  	      <p>
			  	      	<span class="shop-price">{{goods.shop_price}}元</span>
			            <span class="market-price">原价:{{goods.market_price}}元</span> 	      
			   	      </p>
			   	      <div class="number">
			   	      	<div class="left">-</div>
			  	        <input type="text" value="1"/>
			  	        <div class="right">+</div>
			   	      </div>			  	       	  
			   	      
			  	  </div>
			  	  
			      
			      
			  	  <ul class="bottom">
			  	  	  <li class="discountInfo">优惠信息</li>
			  	    	<li class="share">评论分享</li>
			  	  	  <li class="pictruedetail">图文详情</li>
			 	  	</ul>
			 	  	 
				   	<ul class="footer">
	  	  	    <li>客服</li>	
	  	  	    <li>收藏</li>	
	  	  	    <li class="shopcar" @click="addcar(goods.id)">加入购物车</li>	
	  	  	    <li class="buy" @click="gocar">立即购买</li>	
	  	  	 </ul>
  </div>
</template>

<script>
import router from "../router";
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
import { Swipe, SwipeItem } from 'vue-swipe';
require('vue-swipe/dist/vue-swipe.css');
    export default{
    	data(){
    		return{
    			   goods:{}
    		}
    	},
    	 components:{
        "swipe":Swipe,
        "swipe-item":SwipeItem
      },
      beforeRouteEnter(to,from,next){
        next(vm=>{
            Indicator.open();
            vm.$http.get(`http://10.2.158.246:3000/homeapi/detail?id=${vm.$route.params.detid}`).then(res=>{
               console.log(res.body.data)
                    vm.goods=res.body.data;
                 Indicator.close();
            });
                    
        })
    },     	
    	methods:{
    		 changeBack(){
    		 	  history.go(-1);
    		 },
             addcar(id){
                this.$http.post('http://10.2.158.246:3000/shopcar',{goodsID:id}).then(res=>{
                 console.log(res.body.data)
                 if(res.body.data=='1'){
                    Toast({
                        message: '加入购物车成功',
                        position: 'bottom',
                        duration: 3000
                });
                 }else{
                     Toast({
                        message: '加入购物车失败',
                        position: 'bottom',
                        duration: 3000
                    });
                 }
                })
             },
             gocar(){
              router.push({name:"shopcar"})
             }

    	}
    }

</script>

<style scoped>
			 #detail header{
				 	position:fixed;
				 	top:0;
				 	width:100%;
				 	height:4.9rem;
				 	
				 	display:flex;
				 	background: white;
			    z-index: 998;
			 }
			 #detail header a{
				   padding-left: 10px;
			    font-size: 0.16rem;
			    color: #bc946e;
			    font-weight:bold;
			 }
			 #detail header a span{
				 	display: block;
				 	width:2rem;
				 	height:2rem;
				 	margin-top: 1.5rem;
			  
			 }
		 #detail header p{
		     	font-size:2rem;
			    flex: 1;
			    height:4.9rem;
			    line-height: 4.9rem;	          
		      margin-right:3rem;
		      text-align: center;
		      color: #bc946e;
	     }
     #detail .my-swipe{
	    	  width:100%;
				  height: 30rem;
				  color: #fff;	
				  margin-top:4.9rem;		  
			}
			#detail .my-swipe img{
					width:100%;
					height:auto;
			}
      #detail .sell{
	      	margin-top: 0.5rem;
	      	margin-bottom: 0.5rem;
	      	height:8rem;
	        padding: 0.5rem;
	        background: #fff;
	        
      } 
      #detail .sell h3{
      	   font-size:1.6rem;
      	   font-weight: 400;
      }
      #detail .sell p .shop-price{
      	   font-size: 2.2rem;
      	   color: #e74c3c !important;
      } 
      #detail .sell p .market-price{
      	  text-decoration: line-through;
      }
      #detail .sell .number{    	 
	      	  width:9rem;
	      	  height:3rem;
	      	  position:absolute;
	      	  right:0.1rem;     	  
      }
      #detail .sell .number .left{
	      	  width:2rem;
	      	  height:2rem;
	      	  line-height: 2rem;
	      	  border:1px solid #ccc;
	      	  float:left;
	      	  text-align: center;
      }
      #detail .sell .number .right{
	      	  width:2rem;
	      	  height:2rem;
	      	  line-height: 2rem;
	      	  border:1px solid #ccc;
	      	  float:left;
	      	  text-align: center;
      }
      #detail .sell .number input{
	      	 width:2.5rem;
	      	 height: 2rem;
	      	 float:left;
	      	 text-align: center;
	      	 border:1px solid #ccc;
      }
      #detail .bottom{
      	
      	           
      }
      #detail .bottom .discountInfo{ 
      	    margin-bottom:0.5rem;    	    
      	    padding:1rem 2rem;   
            color:#000;
            font-size: 1.6rem;
            background: white;
      }
      #detail .bottom .share{
	      	font-size: 1.6rem;
	      	padding:1rem 2rem;
	      	background: white;
	      	border-bottom: 1px solid #E5E5E5;
      }
      #detail .bottom .pictruedetail{
	      	font-size: 1.6rem;
	      	padding:1rem 2rem;
	      	background: white;
	      	margin-bottom: 5rem;
      }
      #detail .footer{      	  
      	  height:4.5rem;
      	  line-height: 4.5rem;
      	  background: ;
      	  text-align: center;
      	  position: fixed;
      	  bottom: 0;
      	  z-index: 998;
      }
      #detail .footer .shopcar{
      	  background: #FF9C00;
			    color: #fff;
			    height:100%;
      }
       #detail .footer .buy{
       	  background: #FF3300;
          color: #fff; 
          height:100%;  
       }
</style>
