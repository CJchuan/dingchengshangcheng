 <template>
  <div id="list" class="list">
  	     
	  	<router-view></router-view>        
	    <header>
	    	<a @click="changeBack"><span><</span></a>
	    	<p>商品列表</p>
	    	<span><!--<i class="iconfont">&#xe602;</i>--></span>
	    </header>
    
    	<ul class="nav-ul">
    		<li v-for="(data,index) in datalist"  @click="handleClick
      		(index,$route.params.cateid)" v-bind:class="currentIndex==index?'active':''">{{data}}</li>
    	</ul>
    	
     	<ul class="goods-ul" v-if="0==currentIndex">    	   	 
     	   <li v-for="kerwindata in kerwinlist" @click="changePage(kerwindata.id)">
     	     <img :src="kerwindata.thumb"/>
     	     <div>
     	     	<h2>{{kerwindata.title}}</h2><br/>
     	        <h3>￥{{kerwindata.shop_price}}</h3><br/>
     	        <p>销量{{kerwindata.count_sales}}  关注{{kerwindata.count_view}}人次</p>
     	     </div>
     	     
     	   </li>     	   	  
        </ul>
     	<ul class="goods-ul" v-if="1==currentIndex">    	   	 
     	   <li v-for="kerwindata in kerwinlist" @click="changePage(kerwindata.id)">
     	     <img :src="kerwindata.thumb"/>
     	     <div>
     	     	<h2>{{kerwindata.title}}</h2><br/>
     	        <h3>￥{{kerwindata.shop_price}}</h3><br/>
     	        <p>销量{{kerwindata.count_sales}}  关注{{kerwindata.count_view}}人次</p>
     	     </div>
     	     
     	   </li>     	   	  
        </ul>
     	<ul class="goods-ul" v-if="2==currentIndex">    	   	 
     	   <li v-for="kerwindata in kerwinlist" @click="changePage(kerwindata.id)">
     	     <img :src="kerwindata.thumb"/>
     	     <div>
     	     	<h2>{{kerwindata.title}}</h2><br/>
     	        <h3>￥{{kerwindata.shop_price}}</h3><br/>
     	        <p>销量{{kerwindata.count_sales}}  关注{{kerwindata.count_view}}人次</p>
     	     </div>
     	     
     	   </li>     	   	  
        </ul>
     	<ul class="goods-ul" v-if="3==currentIndex">    	   	 
     	   <li v-for="kerwindata in kerwinlist" @click="changePage(kerwindata.id)">
     	     <img :src="kerwindata.thumb"/>
     	     <div>
     	     	<h2>{{kerwindata.title}}</h2><br/>
     	        <h3>￥{{kerwindata.shop_price}}</h3><br/>
     	        <p>销量{{kerwindata.count_sales}}  关注{{kerwindata.count_view}}人次</p>
     	     </div>
     	     
     	   </li>     	   	  
        </ul>
  </div>
</template>

<script>
    import router from "../router";	 
    export default{
    	name:'list',
    	data(){
    		return{
    			datalist:["综合","销量","价格","分类"],
    			kerwinlist:[''],
    			currentIndex:0,
    			index:0
    		}
    	},
    	
    	mounted(){
	    		//console.log(this)
	    		//console.log(this.$route.params.cateid);
    		 	this.$http.get("http://10.2.158.246:3000/homeapi/list/def?id="+this.$route.params.cateid).then(res=>{
                    //console.log(res.body.data);
    		 		this.kerwinlist=res.body.data.list;
    		 		//this.changePage(0,this.kerwinlist[0].id);//页面初始化
    		 		//this.hname=this.kerwinlist[0].mname; //默认加载第一个的名字
    		 		
    		 	},error=>{
    		 		
    		 	})
    	},

    	
    	methods:{
    		handleClick(index,id){
    			this.currentIndex=index;
    			console.log(index);
    			if(index==0){
                     this.currentIndex=0;
    		  }
    			if(index==1){
                     this.currentIndex=1;
                     this.$http.get("http://10.2.158.246:3000/homeapi/list/hot?id="+id).then(res=>{
                     console.log(res.body.data);
    		 		this.kerwinlist=res.body.data.list;
    		 		
    		 	},error=>{
    		 		
    		 	})

    		  }
    			if(index==2){
                     this.currentIndex=2;
                     this.$http.get("http://10.2.158.246:3000/homeapi/list/price?id="+id).then(res=>{
                     console.log(res.body.data);
    		 		this.kerwinlist=res.body.data.list;
    		 		
    		 	},error=>{
    		 		
    		 	})
 
    		  }
    			if(index==3){
                     this.currentIndex=3;
    		  }
	       },
	    		
	    		changePage(id){
	    			router.push({name:'detail',params:{detid:id}})
	    		},
	    		
	    		changeBack(){
	    			  history.go(-1);
	    		}
	    	}
	    }
</script>

<style scoped>
   .active{
    	color: #9B7150;
	    border-bottom: 2px #bd9372 solid;
	    background: #f4f4f4;
   }

	 #list header{
	 	width:100%;
	 	height:4.9rem;
	 	position:fixed;
	 	top:0;
	 	display:flex;
	 	background: white;
	 	z-index: 998;
	 }
	 #list header a{
	    padding-left: 10px;
	    font-size: 16px;
	    font-weight: 400;
	    color: #bc946e;
	 }
	 #list header a span{
	 	display: block;
	 	width:2rem;
	 	height:2rem;
	 	margin-top: 1.5rem;
	    font-weight:bold;
	 }
	 #list header p{
     	font-size:2rem;
	    flex: 1;
	    height:4.9rem;
	    line-height: 4.9rem;	    
        margin-left:3rem;
        margin-right:3rem;
        text-align: center;
        color: #bc946e;
     }
	 #list header span{
	 	display:block;
	 	width:3rem;
	 	height:4.8rem;
	 	float: right;
	 	color: #bc946e;
	 }
     #list .nav-ul{ 
     	position: fixed; 
     	top: 4.9rem; 
     	z-index: 998;	
     	height:3.5rem;
     	line-height: 3.5rem;
     	display:flex;
     	width:100%;
     	background: white;
     }
     #list .nav-ul li{	   	 
	   	 font-size: 1.6rem;
	   	 flex:1;
	   	 height:3.5rem;
	   	 text-align: center;
	   	 justify-content: center;
	   	 
	    
     }
     #list .goods-ul{
     	margin-top: 9rem;
     	width:100%; 
     	height:100%;
     	overflow: hidden; 
     	/*position:absolute;*/
     	  	
     	
     }
     #list .goods-ul li{    	 
     	 background: #fff;
	     border-bottom: 1px solid #eee;
	     padding: 0.8rem;
	     clear: both;     	 	 
     }
      #list .goods-ul li img{
      	  width:8.8rem;
     	    height:8.8rem;
          float: left;
          margin-right: 8px;
      }
      #list .goods-ul li h2{
      	color: #555;
		    font-size: 1.4rem;
		    height: 3.2rem;
		    overflow: hidden;
		    margin-bottom:0.2rem;
      }
      #list .goods-ul li h3{
      	color: #F74300;
		    font-size:1.7rem;
		    position: relative;
      }
     #list .goods-ul li p{
     	  margin-top: 0;
		    margin-bottom: 0;
		    font-size: 1.3rem;
		    color: #8f8f94;
     }
     /*@font-face {
		  font-family: 'iconfont';
		  src: url('../../font/iconfont.eot');
		  src: url('../../font/iconfont.eot?#iefix') format('embedded-opentype'),
		  url('../../font/iconfont.woff') format('woff'),
		  url('../../font/iconfont.ttf') format('truetype'),
		  url('../../font/iconfont.svg#iconfont') format('svg');
		}
		
	.iconfont{
		  font-family:"iconfont" !important;
		  font-size:16px;font-style:normal;
		  -webkit-font-smoothing: antialiased;
		  -webkit-text-stroke-width: 0.2px;
		  -moz-osx-font-smoothing: grayscale;
		}*/
</style>
