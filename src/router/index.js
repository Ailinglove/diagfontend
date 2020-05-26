import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from "../components/Home";
// import About from "../components/About";
// import user from "../components/user";
import Home from "../views/home";
import Breast from "views/tumortype/breast"
import Pancreas from "views/tumortype/pancreas"
import Liver from "views/tumortype/liver/index.vue"
import Lung from "views/tumortype/lung"
import Other from "views/tumortype/other"

import tumorType from "views/tumortype"
// const user=()=>import("~@/views/home")


// 1. 通过vue.use(插件),安装插件
Vue.use(VueRouter)

// 2. 创建VueRouter对象
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/tumortype',
    component: tumorType,
    children:[
      {
        path:'breast',
        component: Breast
      },
      {
        path:'pancreas',
        component: Pancreas
      },
      {
        path:'lung',
        component: Lung
      },
      {
        path:'other',
        component: Other
      }
    ]
  },


  {
    path: '/home',
    meta: {
      title: '首页'
    },
    component: Home,
  },


]
const router=new VueRouter({
  // 配置路由和组件间的应用关系
  routes,
  mode:'history'
})

// router.beforeEach((to,from,next)=>{
//   document.title=to.matched[0].meta.title
//   next()
// })

export default router
