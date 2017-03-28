import Vue from "vue";
import VueRouter from "vue-router";
//底部五块tab
const Home=resolve=>require(["./components/home.vue"],resolve);
const Classify=resolve=>require(["./components/classify.vue"],resolve);
const Community=resolve=>require(["./components/community.vue"],resolve);
const Shopcar=resolve=>require(["./components/shopcar.vue"],resolve);
const Mine=resolve=>require(["./components/mine.vue"],resolve);
/*//分类栏内部块
const Category=resolve=>require(["./components/category.vue"],resolve);
const Goodslist=resolve=>require(["./components/goodslist.vue"],resolve);
//综合
const Integrated=resolve=>require(["./components/integrated.vue"],resolve);
//销量
const Sales=resolve=>require(["./components/sales.vue"],resolve);
//价格
const Prices=resolve=>require(["./components/prices.vue"],resolve);
//分类
const Classes=resolve=>require(["./components/classes.vue"],resolve);
*/
//社区模块
    //推荐帖子
const Homeposts=resolve=>require(["./components/homeposts.vue"],resolve);
    //发帖
const Sendpost=resolve=>require(["./components/sendpost.vue"],resolve);
    //帖子列表
const Postslist=resolve=>require(["./components/postslist.vue"],resolve);
const Postdetail=resolve=>require(["./components/postdetail.vue"],resolve);
    //我的消息
const Mynews=resolve=>require(["./components/mynews.vue"],resolve);
const Apply=resolve=>require(["./components/apply.vue"],resolve);



/*
//我的内部模块
    //登录
const Login=resolve=>require(["./components/login.vue"],resolve);
//注册
const Register=resolve=>require(["./components/register.vue"],resolve);
    //订单记录
const Order=resolve=>require(["./components/order.vue"],resolve);
    //我的收藏
const Collection=resolve=>require(["./components/collection.vue"],resolve);
    //收货地址
const Address=resolve=>require(["./components/address.vue"],resolve);
    //我的二维码
const Qrcode=resolve=>require(["./components/qrcode.vue"],resolve);
*/
const routes=[
{
    path:"/home",
    component:Home
},
{path:"/classify",component:Classify},
{path:"/shopcar",component:Shopcar},
{
    path:"/community",
    component:Community,
     redirect:'/community/homeposts',
    children:[
    {
        path:"homeposts",
        component:Homeposts,
        name:"homeposts"       
    },
    {
        path:"postslist",
        component:Postslist,
        name:"postslist"       
    },
    {
        path:"postdetail/:poid",
        component:Postdetail,
        name:"postdetail"  
    },
    {
        path:"sendpost",
        component:Sendpost,
        name:"sendpost"       
    },
    {
        path:"mynews",
        component:Mynews,
        name:"mynews" 
    },
    {
        path:"apply",
        component:Apply,
        name:"apply"  
    }
    ]
},
{path:"/mine",component:Mine},
{path:"*",redirect:'/home'}


]
const router=new VueRouter({
    mode:"hash",
    routes
})
export default router