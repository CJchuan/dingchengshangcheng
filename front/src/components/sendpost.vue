<template>
    <div class="sendpost">
      <div class="header2">
            <left></left>
            <h2>发表帖子</h2>
      </div>
      <Writecont ref="writecont" ></Writecont>
      <mt-button type="primary" @click="sendpost">发表</mt-button>
    </div>
</template>

<script>
import left from "./left.vue";
import Writecont from "./Writecont.vue";
import router from "../router";
import { Toast } from 'mint-ui';
    export default {
        name:'sendpost',
        data(){
            return{
             userinfo:{
                uid:"",
                uname:'',
                uimg:""
             }
                
            }
        },
        components:{
                Writecont,
                left
        },
          beforeRouteEnter(to,from,next){
        next(vm=>{
          
            vm.$http.post('/upsession').then(res=>{
      
                    if(res.data=="null"){
                       router.push({name:"loading"})
                    }else{
                       vm.userinfo.uid=res.data._id;
                       vm.userinfo.uname=res.data.nickname;  
                    }
            });
                    
        })
    },
        methods:{
          sendpost(){
          var _this=this;
          console.log(_this.$refs)
            this.$http.get("http://10.2.158.246:3000/posts/write",{userId:_this.userinfo.uid,username:_this.userinfo.uname,word:_this.$refs.writecont.myinput,avatar:_this.uimg,attachs:_this.$refs.writecont.imglist}).then(res=>{
                  console.log(res.body);
                  if(res.body=='1'){
                      Toast({ 
                       message: '发表成功',
                      iconClass: 'icon icon-success'
                      });
                      _this.goback();
                  }
            })
          }
        }
    }
</script>

<style scoped>

</style>