<template>
    <div class="poststemp wrap">
        <ul>
            <li v-for="(data,index) of postslist" @click="changeposdetail(data.id)" :key="data.id">
                <div class="top">
                    <img :src="data.avatar" alt="" v-if="data.avatar!=''"/>
                    <img src="../assets/images/em.gif" alt="" v-else/>
                    <h2>{{data.nickname}}</h2>
                    <p class="sendtime">{{data.ctime}}</p>
                </div>
                <div class="mid">
                    <p class="word">{{data.content}}</p>
                </div>
                <div class="bot">
                    <div calss="view">
                        <i class="iconfont">&#xe63f;</i>
                        {{data.view}}
                    </div>
                    <div calss="zan"  data-index="index">
                        <i class="iconfont">&#xe645;</i>
                        {{data.digg}}
                    </div>
                    <div calss="apply">
                        <i class="iconfont">&#xe64f;</i>
                        {{data.comment}}
                    </div>
                </div>                
            </li>
        </ul>
        <write></write>
    </div>
</template>

<script scoped>
import { Indicator } from 'mint-ui';
import  write  from './write.vue';
import { MessageBox } from 'mint-ui';
import router from "../router" ;
    export default {
        name:'poststemp',
        data(){
            return{
                    postslist:[]
            }
        },
        mounted(){
        Indicator.open();
            this.$http.get("http://10.2.158.246:3000/homeapi/posts").then(res=>{
            console.log(res.body.data.list)
                    this.postslist=res.body.data.list;
                       Indicator.close();
            })
        },
        components:{
            write
        },
        
        methods:{
                /*
            handlezan(ev){
                
                if(this.zancount>1){
                    MessageBox('鼎城商城提示', '你已经赞过啦！');
                    }else{
                    this.currentIndex=ev.target.dataset.index;
                    //更新数据,此条数据点赞+1
                    console.log( this.currentIndex)
                    }
            }
            */
            changeposdetail(id){
               router.push({name:'postdetail',params:{poid:id}})
            }
        }
    }
</script>

<style scoped>
.poststemp{
     height:100%;
}
.poststemp ul{

    height:100%;
    margin-bottom:1rem;
}
.poststemp ul li{
     overflow:hidden;
     background:#fff;
     padding:1.5rem;
     margin-top:1rem
}
 .bot{
    display:flex
    }
    .top{
    display:flex;
    height:3.8rem;
    line-height:3.8rem
    }
    .top img{
    width:3.8rem;
    height:3.8rem;
    }
    .top h2{
        flex:1;
        color:#fa0;
        margin-left:1rem;
        font-weight:100;
    }
    .top p{
    width:10.2rem;
    }
    .bot>div{
        flex:1;
        box-sizing:border-box;
        border-left:1px solid #999;
        text-align:center;
        height:2.6rem;
        line-height:2.6
    }
    .bot>div:first-child{
    border-left:0
    }
    .word{
    padding:1rem 0;
    font-size:1.5rem
    }
    .red{
    color:red;
    }
</style>