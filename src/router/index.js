import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from "../components/Home";
// import About from "../components/About";
// import user from "../components/user";
import Home from "../views/home";
// 路由懒加载，一个懒加载对应一个js文件
// const Home=()=>import("~@/views/home")
// const News=()=>import("~@/views/home")
// const Message=()=>import("~@/views/home")

// const About=()=>import("~@/views/home")
// const user=()=>import("~@/views/home")


// 1. 通过vue.use(插件),安装插件
Vue.use(VueRouter)

// 2. 创建VueRouter对象
const routes=[
  {
    path:'',
    redirect:'/home'
  },

  {path:'/home',
    meta:{
      title:'首页'
    },
    component:Home,
    children:[
      // {
      //   path:'',
      //   redirect:'news'
      // },
      {
        path:'/home/message',
        component:Home,
        meta:{
          keepAlive:true
        }
      },
      {
        path:'/home',
        component:Home,
        meta:{
          keepAlive:true
        }
      }
    ]
  },
  {path:'/about',
    component:Home,
    meta:{
      title:'关于'
    },

  },
  {
    path:'/user/:userId',
    component:Home
  }

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
