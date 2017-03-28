<template>
    <div class="mine">
    
        
            <router-view>
     
            </router-view>
        
         <ul class="footer">
        <router-link to="/home" tag="li" active-class="Acitive">
        <i class="iconfont">&#xe608;</i>
        <p>鼎城商城</p></router-link>
        <router-link to="/classify" tag="li" active-class="Acitive">
        <i class="iconfont">&#xe612;</i>分类</router-link>
        <router-link to="/shopcar" tag="li" active-class="Acitive">
        <i class="iconfont">&#xe606;</i>购物车</router-link>
         <router-link to="/community" tag="li" active-class="Acitive">
         <i class="iconfont">&#xe68d;</i>
         社区</router-link>
        <router-link to="/mine" tag="li" active-class="Acitive">
        <i class="iconfont">&#xe68e;</i>
        我的</router-link>

    </ul>
    </div>
</template>

<script>
    export default {
        name:'mine',
        data(){
            return{

            }
        }
    }
</script>

<style>

</style>