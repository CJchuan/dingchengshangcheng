
<template>
    <div class="Writecont" id="writecont">
     <textarea id="content" name="content" style="width:100%;height:20rem;padding:1rem;margin:0;border:0;overflow-y:auto;font-size:1.6rem" placeholder="说点什么吧...(点击加号添加图片，长按图片删除)" v-model="myinpput"></textarea>
      <div class="choosePic">
            <span class="add">
                +
            </span>
            添加图片（长按删除图片）
      </div>
    <div class="Picshow">
            <img class="add" src="">
                
            </img>
                        <img class="add" src="">
                
            </img>
                        <img class="add" src="">
                
            </img>
                        <img class="add" src="">
                
            </img>
                        <img class="add" src="">
                
            </img>
      </div>
    </div>
</template>

<script scoped>

    export default {
        name:'Writecont',
        data(){
            return{
                myinpput:"",
                imglist:""
            }
        }
    }
</script>

<style>
      .content{
        height:100%;
    }
    .choosePic{
        background: #f8f8f8;
        position: relative;
        padding: .8rem;
        height:7.2rem;
        line-height:7.2rem;
        font-size:1.6rem;
        color:#999;
    }
    .add{
        display:inline-block;
        width:7.2rem;
        height:7.2rem;
        line-height:7.2rem;
        text-align:center;
        font-size:3.2rem;
  
        border:.1rem solid #aaa;
    }
        .Picshow{
         width:100%;  
         height:8rem;
        overflow-x:scroll; 
        white-space:nowrap;
        }
        .mint-button--normal{
            padding:0 2rem!important;
            left:50%;
            transform:translateX(-50%);
            width:100%;
        }
</style>