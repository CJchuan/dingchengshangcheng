<template>
  <div id="box">  
  
     <ul class="classifyleft">
      	<li v-for="(data,index) in datalist" @click="handleClick
      		(index,data.id)" v-bind:class="currentIndex==index?'active':''">{{data.mname}}</li>
     </ul>     
     
     <div class="smallbox">
     	   <h2>{{hname}}</h2>
     	   <ul>    	   	 
     	   	  <li v-for="kerwindata in kerwinlist" @click="changePage(kerwindata.id)">
     	   	    <img :src="kerwindata.image"/>
     	   	    {{kerwindata.mname}}
     	   	  </li>     	   	  
     	   </ul>
     </div>
  </div>
</template>

<script>
	import router from "../router";
    export default{
    	name:"getory",
    	data(){
    		return{
    			currentIndex:0,
    			datalist:[],
    			kerwinlist:[],
    			hname:""    			
    		}
    	},
    	
    	mounted(){
    		 	this.$http.get("http://10.2.158.246:3000/homeapi/category1").then(res=>{
    		 		//console.log(res);
    		 		this.datalist=res.body.data;
    		 		this.handleClick(0,this.datalist[0].id);//页面初始化
    		 		this.hname=this.datalist[0].mname; //默认加载第一个的名字
    		 		
    		 	},error=>{
    		 		
    		 	})
    		 },
    		 
    	methods:{
    		 handleClick(index,id){
    		 	    //console.log(index);  		 	    
    		 	    this.currentIndex=index;
    		 	    this.hname=this.datalist[index].mname;
    		 	    //console.log(id);
	    		 	  this.$http.get("http://10.2.158.246:3000/homeapi/category2?cateid="+id).then(res=>{
	    		    //console.log(res.body.data[0].childs);
	    		    this.kerwinlist=res.body.data[0].childs;
	    		 	},error=>{
    		 		
    		 	})

    		 },
    		 
    		 changePage(id){
    		 	 console.log(id);
    		 	 router.push({name:"list",params:{cateid:id}});
    		 },
    		    		 
    	}
    }
</script>

<style>
	.active{
   	  color: #DE3535;
	    
	    background:#f2f2f2;
   }

  body{
     background:#f2f2f2;
   }  
  *{
     padding:0;
     margin:0;
   }
   #box ul,li{
   	 list-style: none;
   }
   #box .classifyleft{
   	    
   	    overflow-y: auto;
	    overflow-x: hidden;
	    width: 25%;
	    background-color: #fff;
	    position: fixed;
	    top: 0;
	    left: 0;
	    bottom: 60px;
   }
   #box .classifyleft li{
   	    width: 7.4rem;
	    height:4.6rem;
	    line-height:4.6rem;
	    border-top: 1px solid #f2f2f2;
	    font-size:1.6rem;
	    overflow: hidden;
	    text-align:center;
	    background: white;
   }
   #box .smallbox{
	    box-sizing: border-box;
	    margin-left:8rem;
	    width: 75%;
	    height: 100%;
	    overflow-y: auto;
	    background: #f2f2f2;
	    padding-bottom:0.7rem;
   }
   #box .smallbox h2{
   	    height:4rem;
	    line-height: 4rem;
	    font-size: 1.6rem;
	    color: #666;
	    margin-left: 0.7rem;
   }
   #box .smallbox ul{
	    margin: auto;
	    overflow: hidden;	    
	    width:24rem;
	    height:100%;
	    overflow: auto;
	   }
	  #box .smallbox ul li{	    
	    float:left;
	    width:11rem;
	    height:6.5rem;
	    overflow: hidden;
	    text-align: center;
	    display: block;
	    margin: 0 5px 5px 0;
	    border: 1px solid #e5e5e5;	  
	    font-size: 1.4rem;
	    color: #666;
	    background: #FFF;
	    position: relative;
	    
	} 
	  #box .smallbox li img{
	   	  width:3.8rem;
	   	  height:3.8rem;
	   	  position: absolute;
	   	  left:3.6rem;
	   	  top:2.3rem;
   	  
     }
     
</style>




<!--{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'//添加对样式表的处理,内联样式
      }-->
